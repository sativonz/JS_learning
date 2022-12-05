const d = document,
  n = navigator,
  ua = n.userAgent;

export function userAgent(id) {
  const $userDevice = d.querySelector(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/ios/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },

    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },

    isBrowser = {
      opera: () => ua.match(/OPR/),
      firefox: () => ua.match(/firefox/i),
      chrome: () => ua.match(/chrome/i),
      edge: () => ua.match(/edge/i),
      ie: () => ua.match(/trident/i),
      any: function () {
        return (
          this.opera() ||
          this.firefox() ||
          this.chrome() ||
          this.edge() ||
          this.ie()
        );
      },
    };

    $userDevice.innerHTML = /*html*/ `
    <ul>
      <li>${ua}</li>
      <li>Platform: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
      <li>Web Browser: ${isBrowser.any()}</li>
    </ul>
    `;}
