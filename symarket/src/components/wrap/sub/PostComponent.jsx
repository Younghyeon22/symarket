import React from 'react';

export default function PostComponent () {
    return (
        <div id='post'>
            <div className="container">
                <div className="gap">
                    <div className="nick">
                        <h3>닉네임</h3>
                        <a href="!#"><img src="./img/chat.svg" alt="" /></a>
                    </div>
                    <div className="img-box">
                        <img src="./img/KakaoTalk_20231207_190436538.jpg" alt="" />
                    </div>
                    <div className="name">
                        <h3>알파카 인형</h3>
                        <div className="icon">
                            <a href="!#"><svg class="content-detail-sidebar__icon-inactive icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M22.971 7.638c-.548-5.17-7.119-7.135-10.57-2.488a.5.5 0 0 1-.802 0C8.148.503 1.577 2.469 1.029 7.625.642 12.451 3.897 17.183 12 21.436c8.104-4.252 11.36-8.984 10.972-13.798zm.996-.093c.428 5.319-3.137 10.446-11.738 14.899a.5.5 0 0 1-.46 0C3.169 17.99-.395 12.864.034 7.532.656 1.67 7.904-.683 12 4.052 16.096-.683 23.344 1.67 23.967 7.545z"></path></svg></a>   
                            <a href="!#"><svg class="content-detail-sidebar__icon-inactive icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path fill-rule="evenodd" transform="matrix(1 0 0 -1 0 23.033)" d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path></svg></a>
                        </div>
                    </div>
                    <div className="price">
                        5,000원
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias, eaque distinctio tempore est quas recusandae perspiciatis quisquam deleniti. Est pariatur soluta expedita quod? Ex sit velit voluptatibus quas autem.</p>
                    </div>
                    <div className="reply">
                        <div className="title">댓글</div>
                        <div className="write">
                            <h4>닉네임</h4>
                            <input type="text" placeholder='댓글 입력란...' />
                            <button>올리기</button>
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <h4>닉네임</h4>
                                    <h5>댓글 내용~~~~~</h5>
                                </li>
                                <li>
                                    <h4>닉네임</h4>
                                    <h5>댓글 내용~~~~~</h5>
                                </li>
                                <li>
                                    <h4>닉네임</h4>
                                    <h5>댓글 내용~~~~~</h5>
                                </li>
                                <li>
                                    <h4>닉네임</h4>
                                    <h5>댓글 내용~~~~~</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

