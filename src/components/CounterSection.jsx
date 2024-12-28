import React, { useEffect } from 'react';
import './counter.css';

const CounterSection = () => {
  useEffect(() => {
    const nums = document.querySelectorAll('.num');
    const menu = document.querySelector('.menu');
    let start = false;

    const startCount = (el) => {
      const max = parseInt(el.dataset.val, 10);
      let count = 0;
      const increment = max / 100;

      const timer = setInterval(() => {
        count += increment;
        el.textContent = Math.floor(count);
        if (count >= max) {
          clearInterval(timer);
          el.textContent = max;
        }
      }, 50);
    };

    const handleScroll = () => {
      if (window.scrollY >= menu.offsetTop && !start) {
        nums.forEach((num) => startCount(num));
        start = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="data">
      <div>
        <div className="icon-wrapper">
          <span className="icon-bg"></span>
          <i className="fa-solid fa-mug-hot"></i>
        </div>
        <span className="num" data-val="350">0</span>
        <span className="info">Coffee Branches</span>
      </div>
      <div>
        <div className="icon-wrapper">
          <span className="icon-bg"></span>
          <i className="fa-solid fa-award"></i>
        </div>
        <span className="num" data-val="90">0</span>
        <span className="info">Number of Awards</span>
      </div>
      <div>
        <div className="icon-wrapper">
          <span className="icon-bg"></span>
          <i className="fa-solid fa-smile"></i>
        </div>
        <span className="num" data-val="2540">0</span>
        <span className="info">Happy Customers</span>
      </div>
      <div>
        <div className="icon-wrapper">
          <span className="icon-bg"></span>
          <i className="fa-solid fa-users"></i>
        </div>
        <span className="num" data-val="750">0</span>
        <span className="info">Staff</span>
      </div>
    </div>
  );
};

export default CounterSection;
