// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function makeitcrash() {
    let notif1open = true;
    let notif2open = true;

    const notif1 = new window.Notification(
        "Emergency",
        {
            body: "There's an emergency going on",
            tag: "bob",
        },
    );
    notif1.onclose = () => {
        console.log("notif 1 was closed");
        notif1open = false;
    };

    const notif2 = new window.Notification(
        "Emergency",
        {
            body: "It's still going on",
            tag: "bob",
        },
    );
    notif2.onclose = () => {
        console.log("notif 1 was closed");
        notif1open = false;
    };

    setTimeout(() => {
        if (notif1open) {
            console.log("notif 1 is still open");
        }
        if (notif2open) {
            console.log("notif 2 is still open");
            notif2.close();
        }
    }, 3000);
}

window.makeitcrash = makeitcrash;