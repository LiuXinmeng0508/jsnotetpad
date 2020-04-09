/* global np,
          $dlgAbout,
          $menubar,
          $statusBar,
          $editor,
          $dlgFont,
          $dlgSearch,
          $dlgReplace,
          $dlgGoto: true */
/* eslint no-console: ["error", { allow: ["log"]  }] */
np.menuData = [
  
  { 
    title: '格式(O)',
    menuItems: [
      {
        title: '自动换行',
        shortcut: '',
        enabled: true,
        handler: function() {
          np.bWrap = !np.bWrap;

          if(np.bWrap) {
            $statusBar.display(false);
            $editor.resize(false);
            $menubar.enabled(3, 0, false);   // [查看]-[状态栏]菜单禁用
            $menubar.enabled(1, 9, false);   // [编辑]-[转到]菜单禁用
          } else {
            $statusBar.display(np.bShowStatusBar);
            $editor.resize(np.bShowStatusBar);
            $menubar.enabled(3, 0, true);     // [查看]-[状态栏]菜单启用
            $menubar.enabled(1, 9, true);     // [编辑]-[转到]菜单启用
            $menubar.checked(3, 0, np.bShowStatusBar);
          }

          $menubar.checked(2, 0, np.bWrap);
          $editor.setWrap(np.bWrap);
        }
      },
      {
        title: '字体...',
        shortcut: '',
        enabled: true,
        handler: function() {
          $dlgFont.show({
            family: np.fontFamily,
            style: np.fontStyle,
            size: np.fontSize,
            okHandler: np.fontHandler
          });
        }
      }
    ],
    width: '156px',
    left: '106px'
  },
];
