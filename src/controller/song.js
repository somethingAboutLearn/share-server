const list = [
  {
    id: 1, //    id
    pic: '/m/1/pic.jpg', //   封面图
    src: '/m/増田俊郎 - おふざけモード.mp3', //   源
    song: 'おふざけモード',
    singer: '増田俊郎',
    describe: 'BMG 放松一下。', //   描述
    duration: 103, //  时长
    hots: '30000', //  播放量
    upload_time: '2019/04/15 11:09:37', //  上传时间
    userInfo: {
      avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
      author: '赵钱孙', //    上传用户名字
      abstract: '这个人很懒，除了分享内容，什么都没有留下。（25字以内）' //  上传用户签名
    }
  },
  {
    id: 2, //    id
    pic: '/m/2/pic.jpg', //   封面图
    src: '/m/晓月老板 - 探清水河.mp3', //   源
    song: '探清水河',
    singer: '晓月老板',
    describe: '北京小调儿', //   描述
    duration: 304, //  时长
    hots: '30000', //  播放量
    upload_time: '2019/04/15 11:10:24', //  上传时间
    userInfo: {
      avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
      author: '周吴郑', //    上传用户名字
      abstract: '2' //  上传用户签名
    }
  },
  {
    id: 3, //    id
    pic: '/m/3/pic.jpg', //   封面图
    src: '/m/石川恵樹 - 清く正しくカブタック(INSTRUMENTAL VERSION).mp3', //   源
    song: '清く正しくカブタック(INSTRUMENTAL VERSION)',
    singer: '石川恵樹',
    describe: 'BMG 童年耳熟能详的。', //   描述
    duration: 226, //  时长
    hots: '30000', //  播放量
    upload_time: '2019/04/15 11:13:45', //  上传时间
    userInfo: {
      avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
      author: '铁甲小宝', //    上传用户名字
      abstract: '变身！' //  上传用户签名
    }
  },
  {
    id: 4, //    id
    pic: '/m/4/pic.jpg', //   封面图
    src: '/m/神前暁 - こなたのテーマ、普通バージョン.mp3', //   源
    song: 'こなたのテーマ、普通バージョン',
    singer: '神前暁',
    describe: 'BMG 童年', //   描述
    duration: 102, //  时长
    hots: '30000', //  播放量
    upload_time: '2019/04/15 11:15:45', //  上传时间
    userInfo: {
      avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
      author: '授课人', //    上传用户名字
      abstract: '天涯路人' //  上传用户签名
    }
  },
  {
    id: 5, //    id
    pic: '/m/5/pic.jpg', //   封面图
    src: '/m/近藤浩治 - Super Mario Bros. 3 ／ アスレチックBGM.mp3', //   源
    song: 'Super Mario Bros. 3 ／ アスレチックBGM',
    singer: '近藤浩治',
    describe: 'BMG', //   描述
    duration: 73, //  时长
    hots: '30000', //  播放量
    upload_time: '2019/04/15 11:25:35', //  上传时间
    userInfo: {
      avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
      author: '登飞来峰', //    上传用户名字
      abstract: '太白。' //  上传用户签名
    }
  },
  {
    id: 6, //    id
    pic: '/m/6/pic.jpg', //   封面图
    src: '/m/陆通 - 膨胀.mp3', //   源
    song: '膨胀',
    singer: '陆通',
    describe: '《西虹市首富》插曲', //   描述
    duration: 153, //  时长
    hots: '30000', //  播放量
    upload_time: '2019/04/15 11:35:05', //  上传时间
    userInfo: {
      avatar: '/imgs/avatar_120*120.jpg', //  上传用户头像
      author: '铁甲小宝', //    上传用户名字
      abstract: '变身！' //  上传用户签名
    }
  }
]

exports.getList = (ctx, next) => {
  let time = ctx.params.time,
    limit = ctx.params.limit
  ctx.body = {
    code: 0,
    msg: '查询成功',
    data: {
      list
    }
  }
}

exports.getOne = (ctx, next) => {
  let id = ctx.params.id
  ctx.body = {
    code: 0,
    msg: '查询成功',
    data: {
      detail: list[id - 1]
    }
  }
}

exports.createOne = (ctx, next) => {
  let item = ctx.body.item
  ctx.body = {
    code: 0,
    msg: '创建成功',
    data: {
      item
    }
  }
}

exports.setOne = (ctx, next) => {
  let id = ctx.params.id,
    item = ctx.body.item
  ctx.body = {
    code: 0,
    msg: '修改成功',
    data: {
      item
    }
  }
}

exports.delOne = (ctx, next) => {
  let id = ctx.body.id
  ctx.body = {
    code: 0,
    msg: '删除成功',
    data: {
      id
    }
  }
}
