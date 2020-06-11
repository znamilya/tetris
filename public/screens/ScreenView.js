class ScreenView {
    constructor(context) {
        this.context = context;
    }
    clear() {
        this.context.clearRect(0, 0, 330, 404);
    }
}
export default ScreenView;
