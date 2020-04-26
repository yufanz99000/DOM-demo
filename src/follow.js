window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },

    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibing);
    },
    before(node, node2) { //把node2放到node前面
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node);
    },
    wrap(node, parent) {// 在node外面再加一个爸爸
        dom.before(node, parent); //先把parent移到node前面
        dom.append(parent, node);//把node子节点放到parent里面
    },
    remove(node) {
        node.remove(node);
        //node.parentNode.removeChild(node);
    },
    /*
        empty(node){//把所有孩子杀死
            //node.innerHTML = '';
            //const childNodes = node.childNodes;
            //const {childNodes} = node;
            const array = [];
            let x = node.firstChild;
            while (x){
                array.push(dom.remove(node.firstChild));
                x = node.firstChild;
            } 
            return array;     
        },
    */
    attr(node, name, value) {
        if (arguments.length === 3) {//给id增加一个title名字
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {//读取title
            return node.getAttribute(name);
        }
    },

    text(node, string) {
        if (arguments.length === 2) { //读写
            if ('innerText' in node) {
                node.innerText = string;//ie
            } else {
                node.textContent = string;//chrome firefox
            }
        } else if (arguments.length === 1) {//只获取
            if ('innerText' in node) {//适配ie
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },
    html(node, string) {
        node.innerHTML = string;
    },

    style(node, name, value) {
        if (arguments.length === 3) {//参数为3个设置属性dom.style(div,'color','red')
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') { //dom.style(test,'border')读取属性
                return node.style[name];
            } else if (name instanceof Object) {
                const object = name;
                for (let k in object) {
                    node.style[k] = object[k];
                    //变量必须放在【】里；.是会变成字符串
                }
            }
        }
    },

    class:{
        add(node, className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        }
    },

    on(node, eventName, fn){
        node.addEventListener(eventName, fn);
    },

    find(selector,scope){
        return (scope || document).querySelectorAll(selector);
    },

    parent(node){
        return node.parentNode;
    },
    siblings(node){
        Array.from(node.parentNode.children).filter(n=>n!== node);
         //只要n此元素不等于当前节点 就把它放到array里
    },

    each(nodeList, fn){
        for(let i =0; i<nodeList.length;i++){
            fn.call(null, nodeList[i]);
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i //移到外面 
        for(i=0;i<list.length;i++){
          if(list[i] === node){
            break
          }
        }
        return i
      }
};

