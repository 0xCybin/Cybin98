function Task(win){
	win.task = this;
	const $task = this.$task = $("<button class='task toggle'/>").appendTo($(".tasks"));
	const $title = $("<span class='title'/>");
	
	this.updateTitle = ()=> {
		$title.text(win.getTitle());
	};

	let $icon;
	this.updateIcon = () => {
		const old_$icon = $icon;
		if (win.$icon) {
			// @TODO: handle different icon sizes between taskbar and titlebar
			$icon = win.$icon.clone();
		} else if (win.getIconName && win.getIconName()) {
			// currently only used for Winamp
			$icon = $("<img/>").attr("src", "images/icons/" + win.getIconName() + "-16x16.png");
		} else {
			$icon = $("<img src='images/icons/task.png'/>");
		}
		if (old_$icon) {
			old_$icon.replaceWith($icon);
		} else {
			$task.prepend($icon);
		}
	};

	this.updateTitle();
	this.updateIcon();

	$task.append($icon, $title);
	$task.on("pointerdown", function (e) {
		e.preventDefault(); // prevent focus, so that the window keeps focus and we can know for minimization if it it should be focused or minimized
		// @TODO: do it on whole taskbar
	});
	$task.on("click", function () {
		if($task.hasClass("selected")){
			win.minimize();
			win.blur();
		}else{
			win.unminimize();
			win.bringToFront();
			win.focus();
		}
	});
	
	win.onFocus(()=> {
		$task.addClass("selected");
	});
	win.onBlur(()=> {
		$task.removeClass("selected");
	});
	win.onClosed(()=> {
		$task.remove();
	});

	if(win.is && win.is(":visible")){
		win.focus();
	}
}
