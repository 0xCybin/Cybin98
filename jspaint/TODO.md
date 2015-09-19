
# ![](images/icons/32.png) JS Paint Todo

* Visual
	* Warning sign for "Save changes to X?" dialogue
	* The window close button uses text; font rendering is not consistent
	* The menus use text; the arrow character is converted to an icon on some mobile devices
	* The progress bar (Rendering GIF) is left native
	* Use win98 default scrollbar size
	* Minor color differences (0x808080 != 0x7b7b7b)
	* I want to give most things a revisit later on for Pixel Perfection
	* Dynamic cursors
		* Inverty fill bucket and airbrush cursors
		* Previewy brush and eraser cursors
	* Pixelize icons, images, checkered backgrounds when zoomed in


* Issues
	* Image > Flip/Rotate, Rotate by angle, `[_________]` Degrees sort of nullifies the image
	* Crashes when saving large images
	* If you open an image it resets the zoom but if you're on the magnification tool it doesn't update the options
	* If you zoom in with the magnifier without previously changing the magnification on the toolbar,
	  then switch back to the magnifier, the toolbar doesn't show any magnification highlighted
	* Dragging the selection fails when zoomed in
	* Firefox
		* It lags unusably when using tools
			* For some tools it only happens while dragging the mouse on the canvas
		* Tool options flicker... *and lag*, when they're redrawn in quick succession
	* The TextBox scrollbars have extra buttons
	* The TextBox contents move down and right when rasterizing
	* Free-form select can leave behind inverty brush in multiplayer
	* Multiplayer cursors that go outside the parent can cause the page to be scrollable
	* Multiplayer interupts you:
		* If you try to make a selection when there's a selection
		* If you try to play with multiple players


### Menus

* Keyboard navigation of submenus
* <kbd>Alt</kbd> (by itself)?


### Components / Windows

* Use the ghost when dragging on a component window's titlebar
* Make the component ghost account for the window's titlebar


* Handle windows going off the screen


### Extended editing

* Transparency ✓
	* Detect transparency when opening an image ✓
	* Option in Image > Attributes... ✓
	* Color opacity slider
	* Toggle between blend and copy modes
	* Represent transparency with a checkered background pattern
	* Maybe equivalise any rgba(X, X, X, 0) in fill algorithm


* Images with multiple sub-images
	* Component to switch between sub-images
	* Deal with undo/redo for sub-images
	* Animated GIFs
		* Transparency ([jnordberg/gif.js issue #5](https://github.com/jnordberg/gif.js/issues/5))
	* Animated Transparent APNGs
		* APNG Library ([this kickstarter wants $15,000 to make this](https://www.kickstarter.com/projects/374397522/apngasm-foss-animated-png-tools-and-apng-standardi))
	* Multi-size Icons
		* Windows ICO ([jBinary can read](http://jdataview.github.io/jBinary.Repo/demo/#ico) and presumably write ICO files)
		* Mac ICNS
	* Layered images?
		* Photoshop PSD ([via psd.js](https://github.com/trevorlinton/psd.js))
		* OpenRaster ORA ([via ora.js](https://github.com/zsgalusz/ora.js/tree/master))


* Multiplayer
	* See [multiplayer.js](multiplayer.js)
	* Deal with undo/redo for sessions


### Device support

* Multi-touch devices
	* Two-finger drag to pan (the second touch cancels the default action just like normal)
* Single-touch devices
	* Pan tool


* Enlarge GUI elements on touch devices
	* Menus!
	* Resize handles


* You can't use the Eraser/Color Eraser tool as a "Color Eraser" without a secondary mouse button
* Make sure anything that uses hovering is paralleled on mobile (tooltips, :hover effects)


* Access to functionality that would normally require a keyboard (with a numpad!)
	* Numpad +/-: Increase/Decrease brush size, Double/Half selection size, ...
	* Shift (toggle): Proportional, Smear / Trail Selection, "Snap to 8 directions" / "Octosnap"?
	* Ctrl+Select: Crop tool
	* Ctrl+Shift+G: "Render GIF"


### Tools

* Free-Form Select
	* Passive: create no undoables until you do something
	* See [On-Canvas Objects](#on-canvas-objects) for Selection


* Select
	* Passive: create no undoables until you do something
	* See [On-Canvas Objects](#on-canvas-objects) for Selection


* Eraser/Color Eraser ✓


* Fill With Color
	* Find a better fill algorithm that gets into all the corners


* Pick Color ✓


* Magnifier
	* Choose and preview viewport with rectangular cursor


* Pencil
	* Adjust size


* Brush ✓


* Airbrush ✓


* Text
	* Handles
	* Wrapping!
	* Underline
	* Expanding to new lines
	* Minimum size of 3em x 1em
	* Store position of FontBox
	* Keep an old TextBox while drawing a new one
	* Save text and record transformations so the image can be saved as
	  SVG (or HTML?) with invisible selectable transformed text elements


* Line
	* Stroke size when aliased


* Curve
	* Aliasing


* Rectangle
	* The stroke should go within the rectangle


* Polygon
	* Aliasing
	* Handle self-intersecting shapes like MS Paint, not like the canvas API
	* Issue with extra undoables
	* Close and finalize the polygon when switching to a different tool


* Ellipse
	* See below


* Rounded Rectangle
	* See below


* **Options**
	* Secret 10x zoom by clicking the area just underneath the 8x zoom
	* In MS Paint, visual area =/= selection highlight area =/= clickable area


* **Shape Styles and Strokes**
	* Shapes: respond to Ctrl (It's complicated)
	* Lots of things: Use stroke size
	* Rounded Rectangle & Ellipse:
		* Support shape styles!
		* If the width/height is less than the stroke size,
		  it should draw a shape with no stroke, filled with
		  the color that would normally be used for the stroke.


### On-Canvas Objects

* Selection
	* Proportionally resize selection while holding Shift
	* Don't cut until you drag or do something else
	  (In MS Paint, you can make a selection, change the background color
	  and drag it, leaving the new background color behind.)
	* Classic transparency where the selected background color is considered transparent


* TextBox
	* See Text tool


* Handles
	* Hide the canvas handles when there is a selection. (This used to work!)
	* I have a git stash where I'm trying to improve selections.
	  Canvas handles hiding is fixed there, but other stuff is broken


### BSOD

Press ~ to bluescreen (or maybe something on the numpad?)

Prankily wait for next user input before fullscreening and bluescreening


### Chrome App

* Set up build process
	* Increment version
	* Compress into zip file
	* Upload new version to the Chrome Web Store?


* Use the chrome.wallpaper API to change the ChromeOS wallpaper
	* Theoretical support ✓
	* Test this on Chrome OS


* Custom window frame
	* (Note: Minimum window size might need updating)


* Publish to the Chrome Web Store!
	* [Analytics](https://developer.chrome.com/apps/analytics)
	* Basic things that people would complain about


### Also

* Anything marked `@TODO` or `@FIXME` in the source code


* Improve README
	* Introduce and explain the project ...better?
	* More images? Animated GIFs perhaps? :)


* CSS
	* Buttons shouldn't need a class `.jspaint-button`!
	* Color cells probably shouldn't be buttons
	* There also shouldn't be classes `.jspaint-window-button` (`.jspaint-window-titlebar button`) or `.jspaint-dialogue-button` (`.jspaint-window-content button`) at all
	* DRY, especially for the buttons
	* Seriously, the buttons
	* Move into styles folder
	* Deal with `z-index`es
	* Comment stuff
	* Buttons
	* Srsly
	* C'mon
	* Buttons
	* Also other `.jspaint-` classes


* JS
	* Selection and TextBox should inherit from a base class
	* Remove either `selection.x/y/w/h` or `._x/_y/_w/_h`; and use `x/y/width/height`
	* Outdated names like sel.$ghost = div.jspaint-selection (not exactly a ghost)
	* Everything is in random files! "functions.js", REALLY?
	* $Window has a $Button facility; $FormWindow overrides it with essentially a better one
	* Image inversion code is duplicated in ChooserCanvas from tool-options.js but should go in image-manipulation.js
	* Comment everything and then try to make the code as obvious as the comments
	* Improve code quality: https://codeclimate.com/github/1j01/jspaint


* Images
	* Use a global sprite sheet, and optimize it


* Help
	* Actual Help Topics
	* Interactive tutorial(s)?


* Search Engine Optimization
	* Load the About Paint content from an element on the page that gets hidden by code

