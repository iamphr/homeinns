//tab选项卡
function Tabs(dom,active,info){
	var that = this;
	this.dom = dom;
	this.active = active;
	this.info = info;

	$('body').on('click',dom,function(){
		that.btnclick(this);
	});
}

Tabs.prototype.btnclick = function(tabLi){
	$(tabLi).addClass(this.active).siblings(this.dom).removeClass(this.active);
	$(this.info).eq($(tabLi).index()).show().siblings(this.info).hide();		
}































var Alert = function(alertDom){
	var $dom = $(alertDom)
	$dom.parent('.modal-pc').show();
	var divWidth = $dom.width();
	var divHeight = $dom.height();
	var modalLeft = $(window).width()/2 - divWidth/ 2 + 'px';
	var modalTop = $(window).height()/2 - divHeight/ 2 + 'px';
    $dom.css({ 'top': modalTop, 'left': modalLeft });
}



