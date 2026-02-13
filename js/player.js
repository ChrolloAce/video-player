/**
 * VideoPlayerController
 * Handles the custom play overlay interaction for the main video element.
 */
class VideoPlayerController {
  constructor(videoId, overlayId, playBtnId) {
    this.video = document.getElementById(videoId);
    this.overlay = document.getElementById(overlayId);
    this.playBtn = document.getElementById(playBtnId);

    if (this.video && this.overlay && this.playBtn) {
      this.bindEvents();
    }
  }

  bindEvents() {
    this.overlay.addEventListener("click", () => this.startPlayback());
    this.playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.startPlayback();
    });

    this.video.addEventListener("pause", () => this.showOverlay());
    this.video.addEventListener("ended", () => this.showOverlay());
    this.video.addEventListener("play", () => this.hideOverlay());
  }

  startPlayback() {
    this.video.play();
    this.hideOverlay();
  }

  showOverlay() {
    this.overlay.classList.remove("hidden");
  }

  hideOverlay() {
    this.overlay.classList.add("hidden");
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new VideoPlayerController("mainVideo", "videoOverlay", "bigPlayBtn");
});
