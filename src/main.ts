
// ウィンドウに文字列とボタンを追加して描画
var thisWnd = this as any;

if (thisWnd instanceof Panel) {
} else {
  thisWnd = new Window("palette", "test-ts-tool", [100, 100, 600, 400] as Bounds);
  let wnd: Window = thisWnd; // 予測出るように
  wnd.show();

  wnd.add("statictext", [15, 15, 600, 30] as Bounds, "static-text-test");
  wnd.add("button",[15,30,100,45] as Bounds,"test-button");
}
