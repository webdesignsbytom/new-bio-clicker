import React, { useEffect, useRef } from 'react';

function CanvasGame() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    // returns <context>
    const canvas = canvasRef.current;
    console.log('canvas', canvas);
    var rect = canvas.parentNode.getBoundingClientRect();
    console.log('rect', rect);

    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // set canvas to visible colour
    canvas.style.backgroundColor = '#bee0ec';

    // Create context to draw with
    const context = canvas.getContext('2d');
    contextRef.current = context;

    createEnemy();
  }, []);

  const clickAttack = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    console.log('offsetX', offsetX);
    console.log('offsetY', offsetY);
  };

  const createEnemy = () => {
    console.log('Create enemy');

    class Algae {
      constructor(id, xpos, ypos, radius, colour) {
        this.id = id;
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.colour = colour;
      }

      // Draw algae on canvas
      draw() {
        console.log('DARW');
        contextRef.current.beginPath();
        contextRef.current.strokeStyle = this.colour;
        contextRef.current.lineWidth = 4;
        contextRef.current.textAlign = 'center'; // Data in center of algae
        contextRef.current.textBaseline = 'middle';
        contextRef.current.font = '20px Arial';
        contextRef.current.fillStyle = this.colour;
        contextRef.current.fillText(this.count, this.xpos, this.ypos); //
        contextRef.current.arc(this.xpos, this.ypos, this.radius, Math.PI * 2, false);
        contextRef.current.stroke();
        contextRef.current.closePath();
      }

    }

    let enemy = new Algae(1, 50, 50, 20, 'green', 10, 1);
    enemy.draw()
    console.log('enemy', enemy);
  };


  return <canvas ref={canvasRef} onClick={clickAttack} />;
}

export default CanvasGame;
