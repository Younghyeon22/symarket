import React from 'react';

export function  HeaderComponent () {
    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="logo">
                        <a href="!#"><h1>SY MARKET</h1></a>
                    </div>
                    <div className="search">
                        <input type="text" className='search' />
                    </div>
                    <div className="mypage">
                        <a href="!#">로그인</a>
                        <i>|</i>
                        <a href="!#">회원가입</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

