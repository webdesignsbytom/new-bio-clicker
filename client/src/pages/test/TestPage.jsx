import React, { useEffect, useState, useRef } from 'react';
// Api
import client from '../../api/client';

function TestPage({ props }) {
  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    let canvasBgColour = `#00FF00`;
    // var rect = canvas.parentNode.getBoundingClientRect();
    // canvas.width = rect.width;
    // canvas.height = rect.height;

    // Mouse size
    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 90) * (canvas.width / 90),
    };

    // Draw canvas
    context.fillStyle = canvasBgColour;
    context.fillRect(0, 0, canvas.width, canvas.height);
    console.log('canvas', canvas);
    console.log('canvasref', canvasRef);
    console.log('canvasref', canvasRef.current);
    // // Mouse position
    // context.addEventListener('mousemove', function (e) {
    //   mouse.x = e.x;
    //   mouse.y = e.y;
    //   console.log('Mouse', e);
    // });

    // Draw canvas

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
}

export default TestPage;
