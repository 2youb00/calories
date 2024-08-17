let stepCount = 0;
let lastAcceleration = { x: 0, y: 0, z: 0 };
let stepThreshold = 10;  
let alertShown = false;

if(window.DeviceMotionEvent){
    if (!alertShown) {
        alert("device is supported");
        alertShown = true;
    }

    window.addEventListener('devicemotion', function(event) {
        let currentAcceleration = event.acceleration;
        
        let deltaX = Math.abs(currentAcceleration.x - lastAcceleration.x);
        let deltaY = Math.abs(currentAcceleration.y - lastAcceleration.y);
        let deltaZ = Math.abs(currentAcceleration.z - lastAcceleration.z);

        let totalAcceleration = deltaX + deltaY + deltaZ;
        document.querySelector('.nbr-move span').innerHTML = totalAcceleration;

        if (totalAcceleration > stepThreshold) {
            stepCount++;
            document.querySelector('.nbr-step span').innerHTML = stepCount;
        }

        lastAcceleration = currentAcceleration;
    });
}
else{
    alert("device is not supported");
}
