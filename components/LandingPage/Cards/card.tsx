"use client"
import React, { useState } from 'react';
import './card.css'

const CardFlip = () => {

    return (<>
        <section className='max-w-7xl gap-2 p-8 md:p-10 flex flex-col md:flex-row justify-center items-center'>


            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg?w=826&t=st=1710434339~exp=1710434939~hmac=443223664594e4f25df7c9b0bc8e9ab79550d478d3e4df91850e335420421e21" alt="Avatar" className="w-full h-full" />
                    </div>
                    <div className="flip-card-back flex justify-center items-center flex-col">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg?w=826&t=st=1710434339~exp=1710434939~hmac=443223664594e4f25df7c9b0bc8e9ab79550d478d3e4df91850e335420421e21" alt="Avatar" className="w-full h-full" />
                    </div>
                    <div className="flip-card-back flex justify-center items-center flex-col">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg?w=826&t=st=1710434339~exp=1710434939~hmac=443223664594e4f25df7c9b0bc8e9ab79550d478d3e4df91850e335420421e21" alt="Avatar" className="w-full h-full" />
                    </div>
                    <div className="flip-card-back flex justify-center items-center flex-col">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            
        </section>
    </>
    );
};

export default CardFlip;
