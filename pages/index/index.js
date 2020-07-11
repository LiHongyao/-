const app = getApp()

Page({
  data: {
    
  },
  onLoad() {
    // appHeader
    this.appHeader = this.selectComponent('#app-header');
  },
  onPageScroll({ scrollTop }) {
    this.appHeader.setOpacity(scrollTop);
  },
  goDetails() {
    wx.navigateTo({
      url: '../details/details',
    })
  },
  goSearch() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  goOther() {
    wx.navigateTo({
      url: '../other/other',
    })
  }
})
