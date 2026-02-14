// composables/useTelegram.js
export const useTelegram = () => {
    const tg = process.client ? window.Telegram?.WebApp : null;

    const user = tg?.initDataUnsafe?.user;

    const closeApp = () => {
        tg?.close();
    };

    const showAlert = (message) => {
        tg?.showAlert(message);
    };

    const showMainButton = (text, onClick) => {
        if (tg) {
            tg.MainButton.text = text;
            tg.MainButton.show();
            tg.MainButton.onClick(onClick);
        }
    };

    return {
        tg,
        user,
        closeApp,
        showAlert,
        showMainButton,
        isReady: !!tg,
        initData: tg?.initData || '',
        themeParams: tg?.themeParams || {}
    };
};