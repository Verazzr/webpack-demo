### compiler

>apply() 方法传入了一个叫 compiler 的参数。这个所谓的 compiler 对象从字面意思上看是编译器的意思，实际上它也就指向了当前运行的 webpack 实例。这个实例包含了 webpack 的所有 options, loaders 和 plugins, 它随着 webpack 的启动而产生，可以说是 webpack 的“灵魂”。当我们运用一个插件时（即插件类被实例化，同时类中的 apply() 方法被调用的时候），apply() 方法便会接收到一个指向这个 compiler 的参数，我们可以通过这个 compiler 访问整个 webpack 环境。

### compilation

>对 compiler 有了一定的了解之后，大概我们就可以猜到 compilation 是干什么用的了。所谓 compilation 包含了 webpack 每次 build 后的详细信息，包括编译出的结果、错误信息、模块、编译后的资源、改变的文件和依赖等的当前状态，同时它提供了很多的事件挂钩，以便于插件来执行一些黑魔法。
