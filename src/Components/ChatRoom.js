import React, { useState } from 'react';
import '../Assets/Stylesheetes/ChatRoom.css'
import { Link } from 'react-router-dom';
import SockJS from 'sockjs-client';

function ChatRoom() {

    var stompClient = null;

    // useState
    const [userData, setUserData] = useState({
        username: "",
        receivername: "",
        connected: "",
        message: ""
    });

    const [publicChats, setPublicChats] = useState([]);

    const [privateChats, setPrivateChats] = useState([]);

    const [tab, setTab] = useState("CHATROOM");

    // function

    // const handleUserName = (event) => {
    //     const { value } = event.target;
    //     setUserData({ ...userData, "username": value });
    // }

    const handleValue = (event) => {
        const { value, name } = event.target;
        setUserData({ ...userData,[name]: value });
    }

    const handleMessage = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "username": value });
    }

    const registerUser = () => {
        let Sock = new SockJS("http://localhost:8081/ws");
        // stompClient= over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        setUserData({ ...userData, "connected": true });
        stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
        stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessageReceived);
        userJoin();
    }

    const userJoin = () =>{
        let chatMessage = {
            senderName: userData?.username,
            status: 'JOIN'
        };
        stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
    }

    const onPublicMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload?.body);
        switch (payloadData?.status) {
            case "JOIN":
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }

    const onPrivateMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err) => {
        console.log(err);
    }


    const SendPublicMessage = () => {
        if(stompClient){
            let chatMessage = {
                senderName: userData?.username,
                message:userData?.message,
                status: 'MESSAGE'
            };
            stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
            setUserData({...userData, "message": ""})
        }
    }

    const SendPrivateMessage = () => {
        if(stompClient){
            let chatMessage = {
                senderName: userData?.username,
                receivername:tab,
                message:userData?.message,
                status: 'MESSAGE'
            };
            if(userData?.username !== tab){
                privateChats.set(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
            setUserData({...userData, "message": ""})
        }
    }





    return (
        <div className='Chatroom_main'>
            <div>

                <div className=''>
                    <h4 className="logout_style"><Link to={"/"}>Logout</Link></h4>
                </div>
                <div>
                    ChatRoom
                    <b>Testing design</b>

                    <div className='Chat_app'>
                        {userData.connected ?
                            <div className='chat-box'>
                                <div className='member-list'>
                                    <ul>
                                        <li onClick={() => { setTab("CHATROOM") }} className={`member ${tab === "CHATROOM" && "active"}`}>Chatroom</li>
                                        {[...privateChats.keys()].map((name, index) => {
                                            <li onClick={() => { setTab(name) }} className={`member ${tab === name && "active"}`} key={index}>
                                                {name}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                                {tab === "CHATROOM" && <div className='chat-content'>
                                    <ul>
                                        {[...publicChats.keys()].map((chat, index) => (
                                            <li className='message' key={index}>
                                                {chat.senderName !== userData?.username && <div className='avatar'>{chat?.senderName}</div>}
                                                <div className='message-data'>{chat?.message}</div>
                                                {chat.senderName !== userData?.username && <div className='avatar'>{chat?.senderName}</div>}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='send-message'>
                                        <input type='text' className='input-message' placeholder='Enter public message' value={userData?.message}
                                            onChange={handleValue} />
                                        <button type='button' className='send-button' onClick={SendPublicMessage}>Send</button>
                                    </div>
                                </div>}
                                {tab !== "CHATROOM" && <div className='chat-content'>
                                    {[...privateChats.get(tab)].map((chat, index) => (
                                        <li className='message' key={index}>
                                            {chat.senderName !== userData?.username && <div className='avatar'>{chat?.senderName}</div>}
                                            <div className='message-data'>{chat?.message}</div>
                                            {chat.senderName !== userData?.username && <div className='avatar'>{chat?.senderName}</div>}
                                        </li>
                                    ))}

                                    <div className='send-message'>
                                        <input type='text' className='input-message' placeholder={`Enter private message for ${tab}`} value={userData?.message}
                                           name='message' onChange={handleValue} />
                                        <button type='button' className='send-button' onClick={SendPrivateMessage}>Send</button>
                                    </div>
                                </div>}
                            </div>
                            :

                            <div className='register'>
                                <input
                                    id='user-name'
                                    name='username'
                                    placeholder='Enter the user name'
                                    value={userData.username}
                                    onChange={handleValue} />
                                <button className='btn btn-success' type='button' onClick={registerUser}>
                                    connect
                                </button>
                            </div>

                        }
                    </div>

                    <span class="heartsbox">
                        <span class="heart anim1">…</span>
                        <span class="heart anim2">…</span>
                        <span class="heart anim3">…</span>
                        <span class="heart anim4">…</span>
                        <span class="heart anim5">…</span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ChatRoom