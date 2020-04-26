const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);//把div放到test后面

const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test,div3);

//const nodes = dom.empty(window.empty);
//console.log(nodes);

dom.attr(test, 'title', 'hello');
const title = dom.attr(test, 'title');
console.log(`title: ${title}`);

dom.style(test, {border: '1px solid red', color:'blue'});
dom.style(test, 'border')//获取某个style

dom.class.add(test, 'shape');

const fn = ()=> {
    console.log('点击了');
}
dom.on(test, 'click', fn);

const testDiv = dom.find('#test')[0];
console.log(testDiv);
console.log(dom.find('.shape', test));

const t = dom.find('#travel')[0];
//dom.each(dom.children(t), (n)=> dom.style(n,'color','blue'));


console.log(dom.index(t1));
