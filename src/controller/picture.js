const list = [
  {
    id: 1, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-02.jpg'
  },
  {
    id: 2, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-01.jpg'
  },
  {
    id: 3, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-03.jpg'
  },
  {
    id: 4, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-01.jpg'
  },
  {
    id: 5, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-02.jpg'
  },
  {
    id: 6, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-03.jpg'
  },
  {
    id: 7, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-03.jpg'
  },
  {
    id: 8, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-02.jpg'
  },
  {
    id: 9, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-01.jpg'
  },
  {
    id: 10, //  图片 id
    src: 'http://www.chengxuyuan.xn--6qq986b3xl/static/image-02.jpg'
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
  let id = parseFloat(ctx.params.id)
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
