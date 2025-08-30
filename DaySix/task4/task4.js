let startTime, interval;
    let running = false;

    const display = document.getElementById("display");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const resetBtn = document.getElementById("resetBtn");

    function formatTime(ms) {
      let milliseconds = ms % 1000;
      let seconds = Math.floor(ms / 1000) % 60;
      let minutes = Math.floor(ms / (1000 * 60)) % 60;
      let hours = Math.floor(ms / (1000 * 60 * 60));

      return (
        String(hours).padStart(2, "0") + " : " +
        String(minutes).padStart(2, "0") + " : " +
        String(seconds).padStart(2, "0") + " : " +
        String(milliseconds).padStart(3, "0")
      );
    }

    function start() {
      if (!running) {
        running = true;
        startTime = Date.now() - (window.elapsed || 0);
        interval = setInterval(() => {
          window.elapsed = Date.now() - startTime;
          display.textContent = formatTime(window.elapsed);
        }, 10);
      }
    }

    function stop() {
      running = false;
      clearInterval(interval);
    }

    function reset() {
      running = false;
      clearInterval(interval);
      window.elapsed = 0;
      display.textContent = "00 : 00 : 00 : 000";
    }

    startBtn.addEventListener("click", start);
    stopBtn.addEventListener("click", stop);
    resetBtn.addEventListener("click", reset);