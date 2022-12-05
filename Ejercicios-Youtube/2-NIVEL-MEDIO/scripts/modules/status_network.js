const d = document,
  w = window,
  n = navigator;

export function statusNetwork() {
  const isOnline = () => {
    const $notification = d.createElement("div");

    if (n.onLine) {
      $notification.innerHTML = `<p>Se ha restablecido la conexión</p>`;
      $notification.classList.add("network-notification");
      $notification.classList.add("online");
      $notification.classList.remove("offline");
    } else {
      $notification.innerHTML = `<p>Se ha perdidó la conexión</p>`;
      $notification.classList.add("network-notification");
      $notification.classList.add("offline");
      $notification.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterBegin", $notification);
    
    setTimeout(() => d.body.removeChild($notification), 3000);
  };

  w.addEventListener("offline", (e) => isOnline());

  w.addEventListener("online", (e) => isOnline());
}