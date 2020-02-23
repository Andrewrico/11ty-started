(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["banner/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header role=\"banner\" class=\"banner banner_base-background\">\n    <h1 class=\"banner_base-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</h1>\n</header>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["banner/homepage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"header bg_primary\" role=\"banner\">\n    <div class=\"grid columns-2 size-1sm-1lg gap-2\">\n        <div class=\"flex-simple \n        sm:items-center sm:justify-center\n        md:items-start md:justify-start\n        lg:items-start lg:justify-start\"\n        >\n            <h1 class=\"text_white\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += " </h1>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "intro")) {
output += "\n                <p> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "intro"), env.opts.autoescape);
output += " </p>\n            ";
;
}
output += "\n            <form id=\"netlify-id8594757\" class=\"form\">\n                <label for=\"email\"></label>\n                <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Enter Your Email\">\n                <button type=\"submit\" class=\"button\">Subscribe</button>\n            </form>\n        </div>\n        <div class=\"flex-stretch\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "BannerImagePath")) {
output += "\n            <img class=\"image image-overlay\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "BannerImagePath"), env.opts.autoescape);
output += "\" alt=\"Image Alt Text\" title=\"Image Title\">\n        ";
;
}
output += "\n        <div>\n    </div>\n</header>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["content/about.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["content/blog.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["content/contact.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["content/homepage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section class=\"block\">\n    <div class=\"grid columns-3\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template/card-simple.njk", false, "content/homepage.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n</section>\n\n<section class=\"block\">\n    <div class=\"grid columns-1\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("template/introduction.njk", false, "content/homepage.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n</section>\n\n<section class=\"block\">\n    <div class=\"grid columns-3\">\n        ";
output += "\n    </div>\n</section>\n\n<section class=\"block\">\n    <div class=\"grid columns-1 max-width-768\">\n        <div>\n        ";
output += "\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"grid columns-1 max-width-768\">\n        <div>\n        ";
output += "\n        </div>\n    </div>\n</section>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n<!-- PAGE HEAD -->\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/head/head.njk", false, "layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n<body>\n<!-- PAGE NAVBAR -->\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/navigation/navbar.njk", false, "layouts/base.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/navigation/drawer.njk", false, "layouts/base.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n<!-- PAGE CONTENT -->\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += t_15;
output += "\n<!-- PAGE FOOTER -->\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/footer/footer.njk", false, "layouts/base.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("foot"))(env, context, frame, runtime, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
output += t_21;
output += "\n</body>\n</html>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 3;
var colno = 41;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_foot(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 45;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_foot: b_foot,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/about.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/about.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("banner/base.njk", false, "page/about.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("content/about.njk", false, "page/about.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/base.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = (function() {
var output = "";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n";
output += "\n";
var t_7;
t_7 = "All posts";
frame.set("postListHeading", t_7, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_7);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_7);
}
output += "\n";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_8, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_8);
}
if(frame.topLevel) {
context.addExport("postListItems", t_8);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("banner/base.njk", false, "page/base.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "page/base.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/blog.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/blog.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n";
output += "\n";
var t_5;
t_5 = "All posts";
frame.set("postListHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_5);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_5);
}
output += "\n";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_6, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_6);
}
if(frame.topLevel) {
context.addExport("postListItems", t_6);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("banner/base.njk", false, "page/blog.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/post-list/post-list.njk", false, "page/blog.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/form/subscriber.njk", false, "page/blog.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("content/blog.njk", false, "page/blog.njk", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
callback(null,t_23);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </main>\n";
cb(null, output);
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/contact.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/contact.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("banner/base.njk", false, "page/contact.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/form/form.njk", false, "page/contact.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("content/contact.njk", false, "page/contact.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </main>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/homepage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/homepage.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n";
var t_5;
t_5 = "Recent posts";
frame.set("postListHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_5);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_5);
}
output += "\n";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_6, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_6);
}
if(frame.topLevel) {
context.addExport("postListItems", t_6);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("banner/homepage.njk", false, "page/homepage.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("content/homepage.njk", false, "page/homepage.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/page.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"\">\n      ";
output += "\n      <div class=\"\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/post.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "page/post.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Post";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n\n\n";
var t_6;
t_6 = (function() {
var output = "";
output += "\n<p class=\"\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 14, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
output += " minute read</span>\n</p>\n";
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("banner/base.njk", false, "page/post.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"grid max-width-768\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "page/post.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += "\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <aside class=\"\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "page/post.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"\">\n          <div class=\"\">\n            <div class=\"\">\n              <h2 class=\"\">Filed under</h2>\n              <ul class=\"\">\n                ";
frame = frame.push();
var t_23 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_23) {t_23 = runtime.fromIterator(t_23);
var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("item", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n                  <li class=\"\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_24, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_24, env.opts.autoescape);
output += "</a>\n                  </li>\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            </div>\n          </div>\n        </footer>\n      ";
;
}
output += "\n    </article>\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/accordion/accordion.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<button class=\"accordion\">Section 1</button>\n<div class=\"panel\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n</div>\n\n<button class=\"accordion\">Section 2</button>\n<div class=\"panel\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n</div>\n\n<button class=\"accordion\">Section 3</button>\n<div class=\"panel\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/accordion/faq.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section>\n  <div class=\"grid columns-2\">\n    <button class=\"accordion\">Section 1</button>\n    <div class=\"panel\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n\n    <button class=\"accordion\">Section 2</button>\n    <div class=\"panel\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n    <button class=\"accordion\">Section 2</button>\n    <div class=\"panel\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n  </div>\n</section>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"[ intro ] [ pad-top-900 pad-bottom-max ]\">\n  <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n    <h1 class=\"[ intro__heading";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") === "/"?" intro__heading--compact":""), env.opts.autoescape);
output += " ] [ text-800 md:text-900 leading-tight ] [ p-name ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "introHeading"), env.opts.autoescape);
output += "</h1>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "introSummary")) {
output += "\n      <div class=\"[ intro__summary ] [ sf-flow ] [ leading-mid measure-short ]\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "introSummary")), env.opts.autoescape);
output += "</div>\n    ";
;
}
output += "\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  <nav class=\"nav\">\n    <ul class=\"nav-menu\">\n      ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        ";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n        ";
var t_6;
t_6 = "";
frame.set("currentAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_6);
}
output += "\n\n        ";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n          ";
var t_7;
t_7 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_7, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_7);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_7);
}
output += "\n        ";
;
}
output += "\n\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += "\n          ";
var t_8;
t_8 = " aria-current=\"page\"";
frame.set("currentAttribute", t_8, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_8);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_8);
}
output += "\n        ";
;
}
output += "\n\n        <li class=\"nav-menu__item\">\n          <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "currentAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n        </li>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n  </nav>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/pagination.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("paginationLinkTokens", t_1, true);
if(frame.topLevel) {
context.setVariable("paginationLinkTokens", t_1);
}
if(frame.topLevel) {
context.addExport("paginationLinkTokens", t_1);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl") || runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n  <hr />\n  <div class=\"inner-wrapper\">\n    <footer class=\"[ pagination ] [ pad-bottom-900 ]\">\n      <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"backwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationPrevText")?runtime.contextOrFrameLookup(context, frame, "paginationPrevText"):"Previous"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationNextText")?runtime.contextOrFrameLookup(context, frame, "paginationNextText"):"Next"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n      </nav>\n    </footer>\n  </div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ] grid columns-1 gap-2\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item card\">\n              <h3 class=\"font-base leading-tight text-600 weight-mid\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n              <p class=\"text-500 gap-top-300 weight-mid\">\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time>\n              </p>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/dropdown/dropdown.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += " <div id=\"backdrop\"></div>\n <div class=\"dropdown\">\n     <button class=\"chip\" id=\"chip\">D</button>\n     <div id=\"chip-dropdown\" class=\"dropcontent\">\n         <a href=\"./\">summary</a>\n     </div>\n </div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/footer/footer.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- FOOTER -->\n\n<footer id=\"footer\">\n    <div class=\"grid\"></div>\n    <div class=\"footer__copyright\">\n        <p> © <span id=\"currentYear\"></span> Copyright ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += ". All Rights Reserved</p>\n    </div>\n</footer>\n\n<!-- JAVASCRIPT -->\n\n";
output += "\n<script src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"staticAssetPath")),"js"), env.opts.autoescape);
output += "\" type=\"text/javascript\"></script>\n\n";
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "PageJSPath")) {
output += "\n    <script src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "PageJSPath"), env.opts.autoescape);
output += "\" type=\"text/javascript\"></script>\n";
;
}
output += "\n\n";
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/js/inline/InlineJS.njk", false, "partials/footer/footer.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n<!-- serviceWorker -->\n<script>\nif ('serviceWorker' in navigator) {\n    window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/service-worker.js');\n    });\n}\n</script>\n\n<!-- netlify-identity -->\n<script src=\"https://identity.netlify.com/v1/netlify-identity-widget.js\" async defer></script>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/form/form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += " <section>\n   <div class=\"grid columns-1\"> \n    <form method=\"post\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" name=\"name\" id=\"name\">\n      <input type=\"submit\">\n    </form>\n  </div> \n </section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/form/subscriber.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section>\n<div class=\"grid columns-1 max-width-768\">\n<div class=\"card__mail-bar\"></div>\n<div class=\"card__mail-container\">\n    <h3> Newslatters</h3>\n    <form \n        id=\"card__mail-subs-netliId-59\" \n        name=\"card__mail-subs-netliId-59\" \n        method=\"POST\" \n        data-netlify=\"true\"\n        class=\"card__mail-form\" \n        >\n        <div class=\"card__mail-field\">\n            <label for=\"netliId-59-email\">E-MAIL</label>\n            <div class=\"field-group\">\n                <svg> <use href=\"/_assets/media/svg/sprites.svg#mail\"></use></svg>\n                <input type=\"email\" id=\"netliId-59-email\" name=\"netliId-59-email\" placeholder=\"jhondue@mail.com\" aria-label=\"email\" required/>\n            </div>\n        </div>\n        <el-button class=\"auto\">\n            <button type=\"submit\" slot=\"button\" class=\"el-btn\">\n                SUBSCRIBRE \n            </button>\n        </el-button>\n    </form>\n</div>\n</div>\n</section>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/meta-info.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "title") + " - " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("pageTitle", t_1, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_1);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_1);
}
output += "\n";
var t_2;
t_2 = "";
frame.set("pageDesc", t_2, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_2);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("siteTitle", t_3, true);
if(frame.topLevel) {
context.setVariable("siteTitle", t_3);
}
if(frame.topLevel) {
context.addExport("siteTitle", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url") + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url");
frame.set("currentUrl", t_4, true);
if(frame.topLevel) {
context.setVariable("currentUrl", t_4);
}
if(frame.topLevel) {
context.addExport("currentUrl", t_4);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaTitle")) {
output += "\n  ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "metaTitle");
frame.set("pageTitle", t_5, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_5);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_5);
}
output += "\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "metaDesc");
frame.set("pageDesc", t_6, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_6);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_6);
}
output += "\n";
;
}
output += "\n\n<title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n\n\n<link rel=\"canonical\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n<meta property=\"og:site_name\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "siteTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:url\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle")) {
output += "\n  <meta name=\"twitter:creator\" content=\"@";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle"),"@",""), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "socialImage")) {
output += "  \n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer")) {
output += "\n  <meta name=\"monetization\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<footer role=\"contentinfo\" id=\"footer\" class=\"background-quaternary\">\n    <div>\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-foot.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        <theme-toggle></theme-toggle>\n    </div>\n</footer>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header role=\"banner\" class=\"banner banner_home\">\n  <div class=\"wrapper\">\n    <span class=\"visually-hidden\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += ": ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageType"), env.opts.autoescape);
output += "</span>\n    <div class=\"[ site-head__inner ] [ md:box-flex space-between align-center ]\">\n      <a href=\"/\" class=\"[ site-head__site-name ] [ leading-tight ]\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == env.getFilter("safe").call(context, "/")?"aria-current=page":""), env.opts.autoescape);
output += ">\n        <span class=\"visually-hidden\">";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") != "/"?"Back to homepage":"Homepage"), env.opts.autoescape);
output += "</span>\n        <span class=\"[ site-head__site-name ] [ text-600 ]\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</span>\n      </a>\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-head.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/third-party-comments.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- ADD YOUR THIRD PARTY COMMENTS CODE HERE -->\n<!-- COMMENTO EXAMPLE \n<div id=\"commento\"></div>\n<script defer\n  src=\"https://cdn.commento.io/js/commento.js\">\n</script>\n-->\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/head/head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<head>\n\n   <!-- meta-info -->\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/meta-info.njk", false, "partials/head/head.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n  <!-- feed -->\n  <link rel=\"alternate\" type=\"application/rss+xml\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"title"), env.opts.autoescape);
output += "\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url"), env.opts.autoescape);
output += "/feed.xml\" />\n  \n  <!-- icon -->\n  <link rel=\"icon\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"faviconPath"), env.opts.autoescape);
output += "\" type=\"image/png\" />\n\n\n  <!-- CSS Inline  -->\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/css/inline/InlineCSS.njk", false, "partials/head/head.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n  <!-- CSS Stylesheet Paths -->\n  <link rel=\"stylesheet\" type=\"text/css\"  href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"staticAssetPath")),"css"), env.opts.autoescape);
output += "\" />\n\n  <!-- CSS Page Path -->\n  ";
if(runtime.contextOrFrameLookup(context, frame, "PageCSSPath")) {
output += "\n    <link rel=\"stylesheet\" type=\"text/css\"  href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "PageCSSPath"), env.opts.autoescape);
output += "\" />\n  ";
;
}
output += "\n\n\n\n  <!-- no-js -->\n  <script>document.documentElement.classList.remove('no-js');</script>\n\n</head>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/navigation/drawer.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div id=\"drawer__backdrop\"></div>\n<div id=\"drawer\">\n\t<div class=\"drawer__header\">\n\t\t<button id=\"drawer__button-close\">\n\t\t\t<svg height=24 style=\"enable-background:new 0 0 459 459\" viewBox=\"0 0 459 459\" width=24 x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg y=0px>\n\t\t\t\t<path d=\"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z\" />\n\t\t\t</svg>\n\t\t</button>\n\t\t<a class=\"drawer__brand\" href=\"/\">\n\t\t\tBrand\n\t\t</a>\n\t</div>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n        <nav class=\"drawer__menu \">\n            <ul class=\"drawer__menu-list\">\n            ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                ";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n                ";
var t_6;
t_6 = "";
frame.set("currentAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_6);
}
output += "\n                ";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n                ";
var t_7;
t_7 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_7, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_7);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_7);
}
output += "\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += "\n                ";
var t_8;
t_8 = " aria-current=\"page\"";
frame.set("currentAttribute", t_8, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_8);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_8);
}
output += "\n                ";
;
}
output += "\n                <li class=\"drawer__menu-item\">\n                    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "currentAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n                </li>\n            ";
;
}
}
frame = frame.pop();
output += "\n            </ul>\n        </nav>\n    ";
;
}
output += "\n    <hr>\n</div> \n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/navigation/navbar.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += " <div class=\"navbar\">\n    <div class=\"navbar__container\">\n    \t<button id=\"drawer__button-open\">\n\t\t\t<svg height=24 style=\"enable-background:new 0 0 459 459\" viewBox=\"0 0 459 459\" width=24 x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg y=0px>\n\t\t\t\t<path d=\"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z\" />\n\t\t\t</svg>\n\t\t</button>\n        <a class=\"navbar__brand\" href=\"/\">Brand</a>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n\t\t<nav class=\"navbar__menu\">\n\t\t\t<ul class=\"navbar__menu-list\">\n\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n\t\t\t\t";
var t_6;
t_6 = "";
frame.set("currentAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_6);
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n\t\t\t\t";
var t_7;
t_7 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_7, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_7);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_7);
}
output += "\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += "\n\t\t\t\t";
var t_8;
t_8 = " aria-current=\"page\"";
frame.set("currentAttribute", t_8, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_8);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_8);
}
output += "\n\t\t\t\t";
;
}
output += "\n\t\t\t\t<li class=\"navbar__menu-item\">\n\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "currentAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n\t\t\t\t</li>\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t</ul>\n\t\t</nav>\n\t\t";
;
}
output += "\n    </div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/navigation/navigation.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/post-list/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n    <div class=\"grid columns-1 max-width-768\">\n      <h2>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 5, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"card\n            sm:items-center sm:justify-center \n            lg:items-start lg:justify-center\n            \">\n              <h3>\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n              <p> \n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"excerpt"), env.opts.autoescape);
output += " \n              </p>\n              <p>\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time>\n              </p>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n";
;
}
output += "\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/inline/InlineCSS.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<style>\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/font.css", false, "static/css/inline/InlineCSS.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/silo.css", false, "static/css/inline/InlineCSS.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/drawer.css", false, "static/css/inline/InlineCSS.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/navbar.css", false, "static/css/inline/InlineCSS.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/banner.css", false, "static/css/inline/InlineCSS.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/header.css", false, "static/css/inline/InlineCSS.njk", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
callback(null,t_23);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/accordion.css", false, "static/css/inline/InlineCSS.njk", false, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
callback(null,t_25);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
callback(null,t_27);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/grid.css", false, "static/css/inline/InlineCSS.njk", false, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
callback(null,t_29);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
callback(null,t_31);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/button.css", false, "static/css/inline/InlineCSS.njk", false, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
callback(null,t_33);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
callback(null,t_35);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/dropdown.css", false, "static/css/inline/InlineCSS.njk", false, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
callback(null,t_37);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
callback(null,t_39);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/form.css", false, "static/css/inline/InlineCSS.njk", false, function(t_42,t_41) {
if(t_42) { cb(t_42); return; }
callback(null,t_41);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_44,t_43) {
if(t_44) { cb(t_44); return; }
callback(null,t_43);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/footer.css", false, "static/css/inline/InlineCSS.njk", false, function(t_46,t_45) {
if(t_46) { cb(t_46); return; }
callback(null,t_45);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_48,t_47) {
if(t_48) { cb(t_48); return; }
callback(null,t_47);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/color.css", false, "static/css/inline/InlineCSS.njk", false, function(t_50,t_49) {
if(t_50) { cb(t_50); return; }
callback(null,t_49);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_52,t_51) {
if(t_52) { cb(t_52); return; }
callback(null,t_51);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/card.css", false, "static/css/inline/InlineCSS.njk", false, function(t_54,t_53) {
if(t_54) { cb(t_54); return; }
callback(null,t_53);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_56,t_55) {
if(t_56) { cb(t_56); return; }
callback(null,t_55);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/icon.css", false, "static/css/inline/InlineCSS.njk", false, function(t_58,t_57) {
if(t_58) { cb(t_58); return; }
callback(null,t_57);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_60,t_59) {
if(t_60) { cb(t_60); return; }
callback(null,t_59);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n</style>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/page/about/styles.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "@import './stylesheet.css'";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/page/blog/styles.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "@import './stylesheet.css'";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/page/contact/styles.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "@import './stylesheet.css'";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/page/homepage/styles.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "body {\n    /* background: red; */\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/accordion.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "/* \n\naccordion\n-------------------------------------\n\n*/\n\n.accordion {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);\n}\n\n.active,\n.accordion:hover {\n  background-color: #ccc;\n}\n\n.accordion:after {\n  content: '\\002B';\n  color: #777;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: \"\\2212\";\n}\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/banner.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".banner {\n\tdisplay: grid;\n\tplace-items: center;\n\tmin-height: 400px;\n\theight: 65vh;\n\tbackground: var(--color-primary);\n\n}\n\n.banner_base-background {\n\tbackground: var(--color-primary);\n\n}\n\n.banner_base-title {\n\tcolor: var(--color-white);\n}\n\n\n\n\n/* \nbanner_home\n----------------------------\n */\n .banner_home-background {\n    /* background: #fff; */\n\tmin-height: 75vh;\n\tdisplay: flex;\n\t/* justify-content: center; */\n\talign-items: center;\n}\n\n.banner_home-cat {\n\tpadding-top: 2rem;\n\tmax-width: 100%;\n\theight: auto;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n\t/* align-items: center; */\n\t/* border:1px solid red; */\n}\n.banner_home-cat h1 {font-family: \"Archivo Black\";\n\tmargin: 0px;\n}\n.banner_home-image-container {\n\theight: 100%;\n\tposition: relative;\n}\n.banner_home-image-container img {\n\tmax-width: 768px;\n\t/* margin-left: 300px; */\n}\n\n\n.banner_home-image-1 {\n\tposition: absolute;\n\topacity: 0.75!important;\n\tz-index: 1;\n\t/* left:0; */\n\t/* right: 0; */\n\t/* top:0; */\n\t/* bottom:0; */\n}\n\n.deb {\n\tborder: 1px solid red;\n}\n\n.banner_home-image-2 {\n\tposition: relative;\n\topacity: 1;\n\tz-index: 5;\n\t/* left:0; */\n\t/* right: 0; */\n\t/* top:0; */\n\t/* bottom:0; */\n\t/* max-width: 100%; */\n\t/* height: auto; */\n\t/* object-fit: cover; */\n}\n\n/* .banner_home-content {\n\tpadding: 2rem 1rem;\n    background: rgba(0, 0, 0, 0.324);\n    display: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: #fff;\n\ttext-align: center;\n} */\n\n/* .banner_home-content h1 {\n\tcolor: #fff;\n\tmargin: 0;\n} */\n\n\n\n\n/* \nbanner_article\n----------------------------\n */\n\n.banner_article-background {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tmin-height: 30vh !important;\n\tbackground-image: url(\"/images/banner.jpg\");\n\tcolor: #fff;\n\n}\n.banner-article h2,\n.banner-article p {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\ttext-align: center;\n}\n\n.banner-article h2 {\n\tfont-size: 2.2rem;\n\n}\n\n\n\n/* \nbanner_get_quote\n----------------------------\n */\n.banner_get_quote-background {\n    background:  #fff;\n    display: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\t/* height: 50vh; */\n\tmin-height: 600px;\n\t/* border:1px solid red; */\n}\n\n\n\n\n\n\n\n.header-plans {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tmin-height: 30vh !important;\n\tbackground-image: url(\"/images/banner.jpg\");\n}\n#main-content {\n\t/* border:1px solid red; */\n}\n\n#matrix {\n\tpadding-top: 2rem;\n\t/* border:1px solid red; */\n\n}\n\n.header-plans h1 {\n\ttext-align: center;\n\tcolor: #fff;\n}\n.plans_section {\n    display: flex;\n    flex-direction: column;\n    min-height: 50vh;\n    padding: 2rem;\n}\n.plans_content {\n    max-width: 768px;\n    color:#fff;\n}\n\n.header-plans h1 {\n\ttext-align: center;\n\tcolor: #fff;\n}\n.plans_section {\n    display: flex;\n    flex-direction: column;\n    min-height: 50vh;\n    padding: 2rem;\n}\n\n.cat__zipcode{\n\tdisplay: flex;\n\t/* align-content: flex-start; */\n\tflex-direction: column;\n\tmax-width: 300px;\n\t/* justify-content: center; */\n\t/* height: 100%; */\n\t/* border:1px solid red; */\n}\n\n.cat__zipcode input{\n\tborder-radius: 6px;\n\tmargin:0.5rem 0;\n\tborder:4px solid var(--color-primary-dry)!important;\n}\n\n\n.cat__zipcode .button:active {\n\tbox-shadow: 0 5px rgb(187, 107, 2);\n\ttransform: translateY(2px);\n}\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/button.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".button {\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-pack: distribute;\n\tjustify-content: space-around;\n\tmax-width: 300px;\n\tmin-width: 250px;\n\twidth: 100%;\n\tpadding: 16px;\n\tbackground: orange;\n\tcolor: #fff;\n\tborder-radius: 2px;\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n\ttext-align: center;\n\tfont-weight: 600;\n\tfont-size: 1.1em;\n\twhite-space: normal;\n\tbox-shadow: var(--color-box-shadow);\n}\n\nbutton:hover,\n.button:hover {\n\topacity: 0.8;\n}\n\nbutton:active,\n.button:active {\n\topacity: 0.9;\n}\n\n\n.link_item {\n\tcolor:var(--color-cat);\n\tfont-weight: 600;\n\tfont-size: 1.4rem;\n\t-webkit-transition: ease .5s;\n\ttransition: ease .5s;\n}\n\n\n\n.slider {\n\n\tbackground: white;\n\theight: 200px;\n\tmargin: auto;\n\toverflow: hidden;\n\tposition: relative;\n\twidth: 100%;\n\t/* border: 1px solid red; */\n}\n\n.slider::before,\n.slider::after {\n\tcontent: \"\";\n\theight: 10px;\n\tposition: absolute;\n\twidth: 300px;\n\tz-index: 2;\n}\n\n.slider img {\n\t-webkit-filter: grayscale(100%);\n\tfilter: grayscale(100%);\n\topacity: 0.3;\n\theight: 80px;\n\tobject-fit: contain;\n}\n\n.slider::after {\n\tright: 0;\n\ttop: 0;\n\t-webkit-transform: rotateZ(180deg);\n\ttransform: rotateZ(180deg);\n}\n\n.slider::before {\n\tleft: 0;\n\ttop: 0;\n}\n\n.slider .slide-track {\n\t-webkit-animation: scroll 60s linear infinite;\n\tanimation: scroll 60s linear infinite;\n\tdisplay: flex;\n\twidth: calc(200px * 14);\n}\n\n.slider .slide {\n\theight: 80px;\n\twidth: 250px;\n\tmargin: 0 2rem;\n\tdisplay: flex; \n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n\n\n\n\n@-webkit-keyframes scroll {\n\t0% {\n\t\t-webkit-transform: translateX(0);\n\t\ttransform: translateX(0);\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(calc(-200px * 7));\n\t\ttransform: translateX(calc(-200px * 7));\n\t}\n}\n\n@keyframes scroll {\n\t0% {\n\t\t-webkit-transform: translateX(0);\n\t\ttransform: translateX(0);\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(calc(-200px * 7));\n\t\ttransform: translateX(calc(-200px * 7));\n\t}\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/card.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".card {\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    box-shadow: rgba(46, 41, 51, 0.4) 0px 1px 2px, rgba(71, 63, 79, 0.489) 0px 2px 4px;\n    background-color: #ffffff;\n    margin-left: 0rem;\n    margin-right: 0rem;\n    border-radius: 4px;\n    border-width: 0px;\n    border-style: initial;\n    border-color: initial;\n    border-image: initial;\n    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n\n.card:hover {\n    transform: translateY(-0.18rem);\n    box-shadow: rgba(0, 0, 0, 0.448) 0px 3px 6px, rgba(0, 0, 0, 0.496) 0px 6px 12px;\n}\n\n\n.card__mail-bar {\n\theight: 12px;\n\twidth: 100%;\n\tbackground: var(--theme-ui-colors-newsletter-background,#ffffff) repeating-linear-gradient( 135deg,var(--theme-ui-colors-newsletter-stripeColorA,#ff5a54),var(--theme-ui-colors-newsletter-stripeColorA,#ff5a54) 20px,#0000 20px,#0000 40px,var(--theme-ui-colors-newsletter-stripeColorB,#3fa9f5) 40px,var(--theme-ui-colors-newsletter-stripeColorB,#3fa9f5) 60px,#0000 60px,#0000 80px );\n}\n\n.card__mail-container {\n\tbackground: #fafafa !important\n}\n\n.card__mail-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmin-height: 200px;\n}\n\n.card__mail-field {\n\twidth: 100%;\n\tborder: 1px solid var(--color-light);\n\tbackground: white;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/color.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "/*\nBackground\n*/\n.background-primary {\n    background-color: var(--color-primary);\n}\n\n.background-secondary {\n    background-color: var(--color-secondary);\n}\n\n.background-tertiary {\n    background-color: var(--color-tertiary);\n}\n\n.background-quaternary {\n    background-color: var(--color-quaternary);\n}\n\n\n\n/*\nFill\n*/\n.fill-primary {\n    fill: var(--color-primary);\n    stop-color: var(--color-secondary);\n}\n\n.fill-secondary {\n    stop-color: var(--color-secondary);\n    fill: var(--color-primary);\n}\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/drawer.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "#drawer {\n\tbackground: var(--color-primary);\n\theight: 100%;\n\twidth: 0;\n\tmax-width: 100%;\n\tposition: fixed;\n\tz-index: 10;\n\ttop: 0;\n\tleft: 0;\n\toverflow-x: hidden;\n\t-webkit-transition: all ease-in-out 300ms;\n\ttransition: all ease-in-out 300ms;\n}\n\n.drawer__header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tpadding: 1rem 0rem;\n\tmax-width: 95%;\n\twidth: 100%;\n\tmargin: auto;\n\n}\n\n\n[id*='drawer__button-'] {\n\tdisplay: none;\n\tz-index: 10;\n\tpadding: 0.8rem;\n\tmin-width: 40px;\n\theight: auto;\n\tcursor: pointer;\n\t-ms-touch-action: auto;\n\ttouch-action: auto;\n\tbackground: transparent;\n\tborder: 0;\n\t-webkit-animation-name: fadeIn;\n\t-webkit-animation-duration: 0.5s;\n\tanimation-name: fadeIn;\n\tanimation-duration: 0.5s;\n}\n\n@media(max-width: 768px) {\n\t[id*='drawer__button-']{\n\t\tdisplay: block;\n\t}\n}\n\n[id*='drawer__button-'] svg {\n\tfill:var(--color-white);\n}\n\n.drawer__brand {\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tmax-width: 6rem;\n\tcolor: var(--color-white);\n\t-webkit-animation-name: fadeIn;\n\t-webkit-animation-duration: 0.5s;\n\tanimation-name: fadeIn;\n\tanimation-duration: 0.5s;\n}\n\n\n\n.drawer__menu {\n\tdisplay: flex;\n\twidth: auto;\n}\n\n.drawer__menu-list {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\tmargin: auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n}\n\n.drawer__menu-item{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tcursor: pointer;\n\twidth: 100%;\n\tpadding: 0.5rem;\n\tmargin: 0.5rem 0;\n\n}\n\n.drawer__menu-item:hover{\n\tbackground: #353535dd;\n}\n\n\n.drawer__menu-item a {\n\tcolor: #fff;\n\tmax-width: 95%;\n\twidth: 100%;\n\tmargin: auto;\n}\n\nhr {\n\tdisplay: block;\n\twidth: 100%;\n\tborder: 0px solid #e8e8e8;\n}\n\n\n#drawer__backdrop {\n\tposition: fixed;\n\theight: 100vh;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tdisplay: none;\n\tbackground: rgba(0, 0, 0, 0.72);\n\tz-index: 10;\n\tcursor: not-allowed;\n}\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/dropdown.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".dropdown {\n    backface-visibility: hidden;\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center\n}\n\n.dropcontent {\n    display: none;\n    backface-visibility: hidden;\n    position: absolute;\n    background-color: #fafafa;\n    justify-content: center;\n    align-items: center;\n    min-width: 5rem;\n    overflow: visible;\n    top: 3.6rem;\n    padding: .5rem;\n    border: .5px solid #c3c3c3;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);\n    z-index: 9999999999 !important;\n    transition: all 0.3s ease-out;\n    animation: top 0.4s;\n    opacity: 1;\n}\n#backdrop {\n    position: fixed;\n    height: 100vh;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    display:none;\n    background: rgba(0, 0, 0, 0.72);\n    background: rgba(0, 0, 0, 0);\n\n    z-index: 9999999999;\n    cursor: not-allowed;\n    \n}\n\n@keyframes top {\n    0% {\n        top: 2.6rem;\n        opacity: 0;\n    }\n    80% {\n        top: 3.6rem;\n        opacity: 1;\n    }\n}\n\n.dropdown .arrow {\n    background: #fafafa;\n    position: absolute;\n    left: calc(50% - 2%);\n    top: -5px;\n    border: solid #b5b5b5;\n    border-width: 0 1.2px 1.2px 0;\n    padding: 3px;\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg)\n}\n\n.dropdown .dropcontent a {\n    text-decoration: none;\n    font-size: .8rem;\n    text-transform: uppercase;\n    padding: .5rem;\n    color: #000 !important\n}\n\n.dropdown .dropcontent a:hover {\n    background: #f3f3f3\n}\n\n.chip {\n    background: #f4f4f4;\n    width: 2.5rem;\n    height: 2.5rem;\n    font-size: 0.7rem !important;\n    font-weight: 100;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black !important;\n    border: 1px solid #cbcbcb;\n    box-shadow: 0 1px #cbcbcb;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.chip:hover {\n    background: #fafafa;\n}\n\n.chip:active {\n    transform: translateY(2px);\n    box-shadow: 0 1px #666;\n}\n.dropdown .drop {\n    display: block\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/field.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "/* \n\nform\n-------------------------------------\n\n*/\n\n.form__container {\n    width: 100%;\n    max-width: 768px;\n    height: 50vh;\n    min-height: 768px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n.form {\n    width: 100%;\n}\n\n.field {\n    display: grid;\n    grid-gap: 1rem;\n    width: 100%;\n    max-width: 768px;\n    margin: auto;\n}\n\n.field_x1 {\n    grid-template-columns: 1fr;\n}\n\n.field_x2 {\n    grid-template-columns: 1fr 1fr;\n}\n\n.field_x3 {\n    grid-template-columns: 1fr 1fr 3fr;\n}\n\n[id*=\"field_\"] {\n    display: none\n}\n\n#field_1 {\n    display: grid;\n}\n\n/* field_inquiry */\n.field_inquiry {\n    grid-column: 1 / -1;\n    color: #000;\n    font-size: 2.2em;\n    min-height: 100px;\n    text-align: center;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem 0;\n}\n\n\n.field_label {\n    color:#000;\n    padding: 1rem;\n}\n\n.field_number input[type=\"number\"] {\n    cursor: text;\n    color: #000 !important;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    width: 100%;\n    border-radius: 2px;\n}\n\n.field_text input[type=\"text\"] {\n    cursor: text;\n    color: #000 !important;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    width: 100%;\n    border-radius: 2px;\n}\n\n.field_radios input[type=\"radio\"] {\n    opacity: 0;\n    position: fixed;\n    width: 0;\n}\n\n.field_radios label {\n    display: inline-grid;\n    place-items: center;\n    background: var(--color-white);\n    padding: 10px 20px;\n    font-family: sans-serif, Arial;\n    font-size: 1.6rem;\n    font-weight: 600;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    width: 100%;\n    min-height: 300px;\n}\n\n.field_radios label:active {\n    box-shadow: 0 2px #aaaaaa;\n    transform: translateY(4px);\n}\n\n.field_radios input[type=\"radio\"]:checked+label {\n    background-color: rgb(4, 49, 65);\n}\n\n.field_radios input[type=\"radio\"]:focus+label {\n    border: 2px dashed #ddd;\n}\n\n.field button {\n    width: 100%;\n    padding: 1rem;\n    color: #fff;\n    background: var(--color-primary);\n    grid-column: 1 / -1;\n    outline: none;\n    border: none;\n    font-family: sans-serif, Arial;\n    font-size: 1.6rem;\n    font-weight: 600;\n}\n\n.field button:active {\n    box-shadow: 0 2px #aaaaaa;\n    transform: translateY(4px);\n}\n\n.field_submit button {\n    cursor: pointer;\n    border-radius: 4px;\n    color: #000;\n    background: var(--color-primary);\n}\n\n.field_label-hidden {\n    display: none;\n    visibility: hidden;\n}\n\ninput {\n    border: 1px solid #ddd !important;\n}\n\ninput:invalid {\n    background: #fff3f3ba !important;\n}\n\ninput:valid {\n    background: #eaf2ffbf !important;\n}\n\n::-webkit-input-placeholder {\n    color: #b9b9b9;\n}\n\n::-moz-placeholder {\n    color: #b9b9b9;\n}\n\n:-ms-input-placeholder {\n    color: #b9b9b9;\n}\n\n:-moz-placeholder {\n    color: #b9b9b9;\n}\n\n.alert {\n    position: absolute;\n    display: inline-block;\n    margin-top: 6rem;\n    max-width: 300px;\n    width: 100%;\n    margin: auto;\n    z-index: 9999999;\n    color: white;\n    font-weight: 300;\n    font-size: 1em;\n    text-align: center;\n}\n\n/* \n\nform step by step\n-------------------------------------\n\n*/\n\n.alert-danger {\n    background-color: #000000;\n}\n\n.alert-success {\n\n    background-color: #3b593b;\n}\n\n.debug {\n    border: 1px solid red;\n}\n\n\n\ninput {\n    cursor: text;\n    color: #000 !important;\n    display: block;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    border-radius: 2px;\n}\n\ninput::placeholder {\n    font-size: 0.8rem;\n    font-style: italic;\n}\n\ninput {\n    transition: background .5s ease-out;\n}\n\n\n.field_income svg {\n    width: 100px;\n    height: 100px;\n}\n\n.field_income label {\n    display: inline-grid;\n    place-items: center;\n    background: var(--color-white);\n    /* color: #fff; */\n    padding: 10px 20px;\n    font-family: sans-serif, Arial;\n    font-size: 1.6rem;\n    font-weight: 600;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    width: 100%;\n    min-height: 100px;\n}\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/font.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "@font-face {\n    font-family:'Open Sans';\n    font-style: normal;\n    src: url('/_includes/static/fonts/OpenSans-Regular.ttf'); \n    text-rendering: optimizeLegibility;\n}\n\n@font-face {\n    font-family:'Archivo Black';\n    font-style: normal;\n    src: url('/_includes/static/fonts/ArchivoBlack-Regular.ttf'); \n    text-rendering: optimizeLegibility;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/footer.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "#footer {\n\tcolor: #fff;\n\tbackground: var(--color-primary);\n\t\n}\n\n#footer a {\n\tfont-weight: 600;\n\tcolor: white;\n}\n\n#footer a:hover {\n\topacity: 0.9;\n}\n\n#footer p {\n\tmargin: 0;\n}\n\n\n.footer__copyright {\n\tcolor: #fff;\n\twidth: 100%;\n\tmax-width: 95%;\n\tpadding: 1rem 0rem;\n\tmargin: auto;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/form.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "/* \n\nform\n-------------------------------------\n\n*/\ninput {\n    cursor: text;\n    color: #000 !important;\n    display: block;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    border-radius: 2px;\n}\n\n\ninput {\n    transition: background .5s ease-out;\n}\n\ninput {\n    border: 1px solid #ddd;\n}\n\ninput:invalid {\n    background: #fff3f3ba;\n}\n\ninput:valid {\n    background: #eaf2ffbf;\n}\n\ninput::placeholder {\n    font-size: 0.8rem;\n    font-style: italic;\n}\n\n::-webkit-input-placeholder {\n    color: #b9b9b9;\n}\n\n::-moz-placeholder {\n    color: #b9b9b9;\n}\n\n:-ms-input-placeholder {\n    color: #b9b9b9;\n}\n\n:-moz-placeholder {\n    color: #b9b9b9;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/grid.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "/* \n\ngrid\n-------------------------------------\n\n*/\n\n.grid {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-gap: 1rem;\n\theight: auto;\n\tmax-width: 1366px;\n\twidth: 100%;\n\tmargin: auto;\n}\n\n.block {\n\tpadding: 1rem;\n}\n\n@media(min-width: 1366px){\n\t.block {\n\t\tpadding: 1rem 0rem;\n\t}\n}\n\n.padgap-0 {\n\tpadding: 0rem 0rem;\n}\n\n.padgap-1 {\n\tpadding: 1rem 0rem;\n}\n\n.padgap-2 {\n\tpadding: 2rem 0rem;\n}\n\n.padgap-3 {\n\tpadding: 3rem 0rem;\n}\n\n.padgap-4 {\n\tpadding: 4rem 0rem;\n}\n\n.padgap-5 {\n\tpadding: 5rem 0rem;\n}\n\n.padgap-6 {\n\tpadding: 6rem 0rem;\n}\n\n.fullrow {\n\tgrid-column: 1 / -1;\n}\n\n.width-100 {\n\twidth: 100%;\n}\n\n.max-width-100 {\n\tmax-width: 100%;\n}\n\n.max-width-768 {\n\tmax-width: 768px;\n}\n\n.max-width-1024 {\n\tmax-width: 1024px;\n}\n\n.max-width-1268 {\n\tmax-width: 1268px;\n}\n\n.max-width-1366 {\n\tmax-width: 1366px;\n}\n\n.max-width-1600 {\n\tmax-width: 1600px;\n}\n\n.gap-0 {\n\tgrid-gap: 0px;\n}\n\n.gap-1 {\n\tgrid-gap: 1em;\n}\n\n.gap-2 {\n\tgrid-gap: 2em;\n}\n\n.gap-3 {\n\tgrid-gap: 3em;\n}\n\n.gap-4 {\n\tgrid-gap: 4em;\n}\n\n.gap-5 {\n\tgrid-gap: 5em;\n}\n\n.gap-6 {\n\tgrid-gap: 6em;\n}\n\n.gap-7 {\n\tgrid-gap: 7em;\n}\n\n.gap-8 {\n\tgrid-gap: 8em;\n}\n\n.gap-9 {\n\tgrid-gap: 9em;\n}\n\n.gap-10 {\n\tgrid-gap: 10em;\n}\n\n.columns-1,\n.columns-2,\n.columns-3,\n.columns-4,\n.columns-5,\n.columns-6,\n.columns-7,\n.columns-8,\n.columns-9,\n.columns-10,\n.columns-11,\n.columns-12 {\n\tgrid-template-columns: 1fr;\n}\n\n.columns-2.smallscreen-2,\n.columns-3.smallscreen-2,\n.columns-4.smallscreen-2,\n.columns-5.smallscreen-2,\n.columns-6.smallscreen-2,\n.columns-7.smallscreen-2,\n.columns-8.smallscreen-2,\n.columns-9.smallscreen-2,\n.columns-10.smallscreen-2,\n.columns-11.smallscreen-2,\n.columns-12.smallscreen-2 {\n\tgrid-template-columns: repeat(2, 1fr);\n}\n\n.columns-2.smallscreen-3,\n.columns-3.smallscreen-3,\n.columns-4.smallscreen-3,\n.columns-5.smallscreen-3,\n.columns-6.smallscreen-3,\n.columns-7.smallscreen-3,\n.columns-8.smallscreen-3,\n.columns-9.smallscreen-3,\n.columns-10.smallscreen-3,\n.columns-11.smallscreen-3,\n.columns-12.smallscreen-3 {\n\tgrid-template-columns: repeat(3, 1fr);\n}\n\n.columns-2.smallscreen-4,\n.columns-3.smallscreen-4,\n.columns-4.smallscreen-4,\n.columns-5.smallscreen-4,\n.columns-6.smallscreen-4,\n.columns-7.smallscreen-4,\n.columns-8.smallscreen-4,\n.columns-9.smallscreen-4,\n.columns-10.smallscreen-4,\n.columns-11.smallscreen-4,\n.columns-12.smallscreen-4 {\n\tgrid-template-columns: repeat(4, 1fr);\n}\n\n@media(min-width: 768px) {\n\t.columns-2,\n\t.columns-5,\n\t.columns-4,\n\t.columns-6,\n\t.columns-8,\n\t.columns-9,\n\t.columns-10,\n\t.columns-11,\n\t.columns-12 {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t.columns-2.size-1s-1m,\n\t.columns-2.size-1s-1l,\n\t.columns-2.size-1m-1s,\n\t.columns-2.size-1m-1l,\n\t.columns-2.size-1l-1s,\n\t.columns-2.size-1l-1m,\n\t.columns-3.size-1s-1s-1m,\n\t.columns-3.size-1s-1s-1l,\n\t.columns-3.size-1s-1m-1s,\n\t.columns-3.size-1s-1m-1m,\n\t.columns-3.size-1s-1m-1l,\n\t.columns-3.size-1s-1l-1s,\n\t.columns-3.size-1s-1l-1m,\n\t.columns-3.size-1s-1l-1l,\n\t.columns-3.size-1m-1s-1s,\n\t.columns-3.size-1m-1s-1m,\n\t.columns-3.size-1m-1s-1l,\n\t.columns-3.size-1m-1m-1s,\n\t.columns-3.size-1m-1m-1l,\n\t.columns-3.size-1m-1l-1s,\n\t.columns-3.size-1m-1l-1m,\n\t.columns-3.size-1m-1l-1l,\n\t.columns-3.size-1l-1s-1s,\n\t.columns-3.size-1l-1s-1m,\n\t.columns-3.size-1l-1s-1l,\n\t.columns-3.size-1l-1m-1s,\n\t.columns-3.size-1l-1m-1m,\n\t.columns-3.size-1l-1m-1l,\n\t.columns-3.size-1l-1l-1s,\n\t.columns-3.size-1l-1l-1m,\n\t.columns-4.size-1s-1s-1s-1m,\n\t.columns-4.size-1s-1s-1s-1l,\n\t.columns-4.size-1s-1s-1m-1s,\n\t.columns-4.size-1s-1s-1m-1m,\n\t.columns-4.size-1s-1s-1m-1l,\n\t.columns-4.size-1s-1s-1l-1s,\n\t.columns-4.size-1s-1s-1l-1m,\n\t.columns-4.size-1s-1s-1l-1l,\n\t.columns-4.size-1s-1m-1s-1s,\n\t.columns-4.size-1s-1m-1s-1m,\n\t.columns-4.size-1s-1m-1s-1l,\n\t.columns-4.size-1s-1m-1m-1s,\n\t.columns-4.size-1s-1m-1m-1m,\n\t.columns-4.size-1s-1m-1m-1l,\n\t.columns-4.size-1s-1m-1l-1s,\n\t.columns-4.size-1s-1m-1l-1m,\n\t.columns-4.size-1s-1m-1l-1l,\n\t.columns-4.size-1s-1l-1s-1s,\n\t.columns-4.size-1s-1l-1s-1m,\n\t.columns-4.size-1s-1l-1s-1l,\n\t.columns-4.size-1s-1l-1m-1s,\n\t.columns-4.size-1s-1l-1m-1m,\n\t.columns-4.size-1s-1l-1m-1l,\n\t.columns-4.size-1s-1l-1l-1s,\n\t.columns-4.size-1s-1l-1l-1m,\n\t.columns-4.size-1s-1l-1l-1l,\n\t.columns-4.size-1m-1s-1s-1s,\n\t.columns-4.size-1m-1s-1s-1m,\n\t.columns-4.size-1m-1s-1s-1l,\n\t.columns-4.size-1m-1s-1m-1s,\n\t.columns-4.size-1m-1s-1m-1m,\n\t.columns-4.size-1m-1s-1m-1l,\n\t.columns-4.size-1m-1s-1l-1s,\n\t.columns-4.size-1m-1s-1l-1m,\n\t.columns-4.size-1m-1s-1l-1l,\n\t.columns-4.size-1m-1m-1s-1s,\n\t.columns-4.size-1m-1m-1s-1m,\n\t.columns-4.size-1m-1m-1s-1l,\n\t.columns-4.size-1m-1m-1m-1s,\n\t.columns-4.size-1m-1m-1m-1l,\n\t.columns-4.size-1m-1m-1l-1s,\n\t.columns-4.size-1m-1m-1l-1m,\n\t.columns-4.size-1m-1m-1l-1l,\n\t.columns-4.size-1m-1l-1s-1s,\n\t.columns-4.size-1m-1l-1s-1m,\n\t.columns-4.size-1m-1l-1s-1l,\n\t.columns-4.size-1m-1l-1m-1s,\n\t.columns-4.size-1m-1l-1m-1m,\n\t.columns-4.size-1m-1l-1m-1l,\n\t.columns-4.size-1m-1l-1l-1s,\n\t.columns-4.size-1m-1l-1l-1m,\n\t.columns-4.size-1m-1l-1l-1l,\n\t.columns-4.size-1l-1s-1s-1s,\n\t.columns-4.size-1l-1s-1s-1m,\n\t.columns-4.size-1l-1s-1s-1l,\n\t.columns-4.size-1l-1s-1m-1s,\n\t.columns-4.size-1l-1s-1m-1m,\n\t.columns-4.size-1l-1s-1m-1l,\n\t.columns-4.size-1l-1s-1l-1s,\n\t.columns-4.size-1l-1s-1l-1m,\n\t.columns-4.size-1l-1s-1l-1l,\n\t.columns-4.size-1l-1m-1s-1s,\n\t.columns-4.size-1l-1m-1s-1m,\n\t.columns-4.size-1l-1m-1s-1l,\n\t.columns-4.size-1l-1m-1m-1s,\n\t.columns-4.size-1l-1m-1m-1m,\n\t.columns-4.size-1l-1m-1m-1l,\n\t.columns-4.size-1l-1m-1l-1s,\n\t.columns-4.size-1l-1m-1l-1m,\n\t.columns-4.size-1l-1m-1l-1l,\n\t.columns-4.size-1l-1l-1s-1s,\n\t.columns-4.size-1l-1l-1s-1m,\n\t.columns-4.size-1l-1l-1s-1l,\n\t.columns-4.size-1l-1l-1m-1s,\n\t.columns-4.size-1l-1l-1m-1m,\n\t.columns-4.size-1l-1l-1m-1l,\n\t.columns-4.size-1l-1l-1l-1s,\n\t.columns-4.size-1l-1l-1l-1m {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n}\n\n@media(min-width: 1024px) {\n\t.columns-3,\n\t.columns-6,\n\t.columns-12 {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t.columns-4,\n\t.columns-8 {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n\n\t.columns-5,\n\t.columns-9,\n\t.columns-10,\n\t.columns-11 {\n\t\tgrid-template-columns: repeat(5, 1fr);\n\t}\n\n\t.columns-2.size-1s-1m {\n\t\t-ms-grid-columns: 1fr 2fr;\n\t\tgrid-template-columns: 1fr 2fr;\n\t}\n\n\t.columns-2.size-1s-1l {\n\t\t-ms-grid-columns: 1fr 3fr;\n\t\tgrid-template-columns: 1fr 3fr;\n\t}\n\n\t.columns-2.size-1m-1s {\n\t\t-ms-grid-columns: 2fr 1fr;\n\t\tgrid-template-columns: 2fr 1fr;\n\t}\n\n\t.columns-2.size-1m-1l {\n\t\t-ms-grid-columns: 2fr 3fr;\n\t\tgrid-template-columns: 2fr 3fr;\n\t}\n\n\t.columns-2.size-1l-1s {\n\t\t-ms-grid-columns: 3fr 1fr;\n\t\tgrid-template-columns: 3fr 1fr;\n\t}\n\n\t.columns-2.size-1l-1m {\n\t\t-ms-grid-columns: 3fr 2fr;\n\t\tgrid-template-columns: 3fr 2fr;\n\t}\n\n\t.columns-3.size-1s-1s-1m {\n\t\t-ms-grid-columns: 1fr 1fr 2fr;\n\t\tgrid-template-columns: 1fr 1fr 2fr;\n\t}\n\n\t.columns-3.size-1s-1s-1l {\n\t\t-ms-grid-columns: 1fr 1fr 3fr;\n\t\tgrid-template-columns: 1fr 1fr 3fr;\n\t}\n\n\t.columns-3.size-1s-1m-1s {\n\t\t-ms-grid-columns: 1fr 2fr 1fr;\n\t\tgrid-template-columns: 1fr 2fr 1fr;\n\t}\n\n\t.columns-3.size-1s-1m-1m {\n\t\t-ms-grid-columns: 1fr 2fr 2fr;\n\t\tgrid-template-columns: 1fr 2fr 2fr;\n\t}\n\n\t.columns-3.size-1s-1m-1l {\n\t\t-ms-grid-columns: 1fr 2fr 3fr;\n\t\tgrid-template-columns: 1fr 2fr 3fr;\n\t}\n\n\t.columns-3.size-1s-1l-1s {\n\t\t-ms-grid-columns: 1fr 3fr 1fr;\n\t\tgrid-template-columns: 1fr 3fr 1fr;\n\t}\n\n\t.columns-3.size-1s-1l-1m {\n\t\t-ms-grid-columns: 1fr 3fr 2fr;\n\t\tgrid-template-columns: 1fr 3fr 2fr;\n\t}\n\n\t.columns-3.size-1s-1l-1l {\n\t\t-ms-grid-columns: 1fr 3fr 3fr;\n\t\tgrid-template-columns: 1fr 3fr 3fr;\n\t}\n\n\t.columns-3.size-1m-1s-1s {\n\t\t-ms-grid-columns: 2fr 1fr 1fr;\n\t\tgrid-template-columns: 2fr 1fr 1fr;\n\t}\n\n\t.columns-3.size-1m-1s-1m {\n\t\t-ms-grid-columns: 2fr 1fr 2fr;\n\t\tgrid-template-columns: 2fr 1fr 2fr;\n\t}\n\n\t.columns-3.size-1m-1s-1l {\n\t\t-ms-grid-columns: 2fr 1fr 3fr;\n\t\tgrid-template-columns: 2fr 1fr 3fr;\n\t}\n\n\t.columns-3.size-1m-1m-1s {\n\t\t-ms-grid-columns: 2fr 2fr 1fr;\n\t\tgrid-template-columns: 2fr 2fr 1fr;\n\t}\n\n\t.columns-3.size-1m-1m-1l {\n\t\t-ms-grid-columns: 2fr 2fr 3fr;\n\t\tgrid-template-columns: 2fr 2fr 3fr;\n\t}\n\n\t.columns-3.size-1m-1l-1s {\n\t\t-ms-grid-columns: 2fr 3fr 1fr;\n\t\tgrid-template-columns: 2fr 3fr 1fr;\n\t}\n\n\t.columns-3.size-1m-1l-1m {\n\t\t-ms-grid-columns: 2fr 3fr 2fr;\n\t\tgrid-template-columns: 2fr 3fr 2fr;\n\t}\n\n\t.columns-3.size-1m-1l-1l {\n\t\t-ms-grid-columns: 2fr 3fr 3fr;\n\t\tgrid-template-columns: 2fr 3fr 3fr;\n\t}\n\n\t.columns-3.size-1l-1s-1s {\n\t\t-ms-grid-columns: 3fr 1fr 1fr;\n\t\tgrid-template-columns: 3fr 1fr 1fr;\n\t}\n\n\t.columns-3.size-1l-1s-1m {\n\t\t-ms-grid-columns: 3fr 1fr 2fr;\n\t\tgrid-template-columns: 3fr 1fr 2fr;\n\t}\n\n\t.columns-3.size-1l-1s-1l {\n\t\t-ms-grid-columns: 3fr 1fr 3fr;\n\t\tgrid-template-columns: 3fr 1fr 3fr;\n\t}\n\n\t.columns-3.size-1l-1m-1s {\n\t\t-ms-grid-columns: 3fr 2fr 1fr;\n\t\tgrid-template-columns: 3fr 2fr 1fr;\n\t}\n\n\t.columns-3.size-1l-1m-1m {\n\t\t-ms-grid-columns: 3fr 2fr 2fr;\n\t\tgrid-template-columns: 3fr 2fr 2fr;\n\t}\n\n\t.columns-3.size-1l-1m-1l {\n\t\t-ms-grid-columns: 3fr 2fr 3fr;\n\t\tgrid-template-columns: 3fr 2fr 3fr;\n\t}\n\n\t.columns-3.size-1l-1l-1s {\n\t\t-ms-grid-columns: 3fr 3fr 1fr;\n\t\tgrid-template-columns: 3fr 3fr 1fr;\n\t}\n\n\t.columns-3.size-1l-1l-1m {\n\t\t-ms-grid-columns: 3fr 3fr 2fr;\n\t\tgrid-template-columns: 3fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1s-1s-1m {\n\t\t-ms-grid-columns: 1fr 1fr 1fr 2fr;\n\t\tgrid-template-columns: 1fr 1fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1s-1s-1l {\n\t\t-ms-grid-columns: 1fr 1fr 1fr 3fr;\n\t\tgrid-template-columns: 1fr 1fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1s-1m-1s {\n\t\t-ms-grid-columns: 1fr 1fr 2fr 1fr;\n\t\tgrid-template-columns: 1fr 1fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1s-1m-1m {\n\t\t-ms-grid-columns: 1fr 1fr 2fr 2fr;\n\t\tgrid-template-columns: 1fr 1fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1s-1m-1l {\n\t\t-ms-grid-columns: 1fr 1fr 2fr 3fr;\n\t\tgrid-template-columns: 1fr 1fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1s-1l-1s {\n\t\t-ms-grid-columns: 1fr 1fr 3fr 1fr;\n\t\tgrid-template-columns: 1fr 1fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1s-1l-1m {\n\t\t-ms-grid-columns: 1fr 1fr 3fr 2fr;\n\t\tgrid-template-columns: 1fr 1fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1s-1l-1l {\n\t\t-ms-grid-columns: 1fr 1fr 3fr 3fr;\n\t\tgrid-template-columns: 1fr 1fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1m-1s-1s {\n\t\t-ms-grid-columns: 1fr 2fr 1fr 1fr;\n\t\tgrid-template-columns: 1fr 2fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1m-1s-1m {\n\t\t-ms-grid-columns: 1fr 2fr 1fr 2fr;\n\t\tgrid-template-columns: 1fr 2fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1m-1s-1l {\n\t\t-ms-grid-columns: 1fr 2fr 1fr 3fr;\n\t\tgrid-template-columns: 1fr 2fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1m-1m-1s {\n\t\t-ms-grid-columns: 1fr 2fr 2fr 1fr;\n\t\tgrid-template-columns: 1fr 2fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1m-1m-1m {\n\t\t-ms-grid-columns: 1fr 2fr 2fr 2fr;\n\t\tgrid-template-columns: 1fr 2fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1m-1m-1l {\n\t\t-ms-grid-columns: 1fr 2fr 2fr 3fr;\n\t\tgrid-template-columns: 1fr 2fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1m-1l-1s {\n\t\t-ms-grid-columns: 1fr 2fr 3fr 1fr;\n\t\tgrid-template-columns: 1fr 2fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1m-1l-1m {\n\t\t-ms-grid-columns: 1fr 2fr 3fr 2fr;\n\t\tgrid-template-columns: 1fr 2fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1m-1l-1l {\n\t\t-ms-grid-columns: 1fr 2fr 3fr 3fr;\n\t\tgrid-template-columns: 1fr 2fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1l-1s-1s {\n\t\t-ms-grid-columns: 1fr 3fr 1fr 1fr;\n\t\tgrid-template-columns: 1fr 3fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1l-1s-1m {\n\t\t-ms-grid-columns: 1fr 3fr 1fr 2fr;\n\t\tgrid-template-columns: 1fr 3fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1l-1s-1l {\n\t\t-ms-grid-columns: 1fr 3fr 1fr 3fr;\n\t\tgrid-template-columns: 1fr 3fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1l-1m-1s {\n\t\t-ms-grid-columns: 1fr 3fr 2fr 1fr;\n\t\tgrid-template-columns: 1fr 3fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1l-1m-1m {\n\t\t-ms-grid-columns: 1fr 3fr 2fr 2fr;\n\t\tgrid-template-columns: 1fr 3fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1l-1m-1l {\n\t\t-ms-grid-columns: 1fr 3fr 2fr 3fr;\n\t\tgrid-template-columns: 1fr 3fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1s-1l-1l-1s {\n\t\t-ms-grid-columns: 1fr 3fr 3fr 1fr;\n\t\tgrid-template-columns: 1fr 3fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1s-1l-1l-1m {\n\t\t-ms-grid-columns: 1fr 3fr 3fr 2fr;\n\t\tgrid-template-columns: 1fr 3fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1s-1l-1l-1l {\n\t\t-ms-grid-columns: 1fr 3fr 3fr 3fr;\n\t\tgrid-template-columns: 1fr 3fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1s-1s-1s {\n\t\t-ms-grid-columns: 2fr 1fr 1fr 1fr;\n\t\tgrid-template-columns: 2fr 1fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1s-1s-1m {\n\t\t-ms-grid-columns: 2fr 1fr 1fr 2fr;\n\t\tgrid-template-columns: 2fr 1fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1s-1s-1l {\n\t\t-ms-grid-columns: 2fr 1fr 1fr 3fr;\n\t\tgrid-template-columns: 2fr 1fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1s-1m-1s {\n\t\t-ms-grid-columns: 2fr 1fr 2fr 1fr;\n\t\tgrid-template-columns: 2fr 1fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1s-1m-1m {\n\t\t-ms-grid-columns: 2fr 1fr 2fr 2fr;\n\t\tgrid-template-columns: 2fr 1fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1s-1m-1l {\n\t\t-ms-grid-columns: 2fr 1fr 2fr 3fr;\n\t\tgrid-template-columns: 2fr 1fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1s-1l-1s {\n\t\t-ms-grid-columns: 2fr 1fr 3fr 1fr;\n\t\tgrid-template-columns: 2fr 1fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1s-1l-1m {\n\t\t-ms-grid-columns: 2fr 1fr 3fr 2fr;\n\t\tgrid-template-columns: 2fr 1fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1s-1l-1l {\n\t\t-ms-grid-columns: 2fr 1fr 3fr 3fr;\n\t\tgrid-template-columns: 2fr 1fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1m-1s-1s {\n\t\t-ms-grid-columns: 2fr 2fr 1fr 1fr;\n\t\tgrid-template-columns: 2fr 2fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1m-1s-1m {\n\t\t-ms-grid-columns: 2fr 2fr 1fr 2fr;\n\t\tgrid-template-columns: 2fr 2fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1m-1s-1l {\n\t\t-ms-grid-columns: 2fr 2fr 1fr 3fr;\n\t\tgrid-template-columns: 2fr 2fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1m-1m-1s {\n\t\t-ms-grid-columns: 2fr 2fr 2fr 1fr;\n\t\tgrid-template-columns: 2fr 2fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1m-1m-1l {\n\t\t-ms-grid-columns: 2fr 2fr 2fr 3fr;\n\t\tgrid-template-columns: 2fr 2fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1m-1l-1s {\n\t\t-ms-grid-columns: 2fr 2fr 3fr 1fr;\n\t\tgrid-template-columns: 2fr 2fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1m-1l-1m {\n\t\t-ms-grid-columns: 2fr 2fr 3fr 2fr;\n\t\tgrid-template-columns: 2fr 2fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1m-1l-1l {\n\t\t-ms-grid-columns: 2fr 2fr 3fr 3fr;\n\t\tgrid-template-columns: 2fr 2fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1l-1s-1s {\n\t\t-ms-grid-columns: 2fr 3fr 1fr 1fr;\n\t\tgrid-template-columns: 2fr 3fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1l-1s-1m {\n\t\t-ms-grid-columns: 2fr 3fr 1fr 2fr;\n\t\tgrid-template-columns: 2fr 3fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1l-1s-1l {\n\t\t-ms-grid-columns: 2fr 3fr 1fr 3fr;\n\t\tgrid-template-columns: 2fr 3fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1l-1m-1s {\n\t\t-ms-grid-columns: 2fr 3fr 2fr 1fr;\n\t\tgrid-template-columns: 2fr 3fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1l-1m-1m {\n\t\t-ms-grid-columns: 2fr 3fr 2fr 2fr;\n\t\tgrid-template-columns: 2fr 3fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1l-1m-1l {\n\t\t-ms-grid-columns: 2fr 3fr 2fr 3fr;\n\t\tgrid-template-columns: 2fr 3fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1m-1l-1l-1s {\n\t\t-ms-grid-columns: 2fr 3fr 3fr 1fr;\n\t\tgrid-template-columns: 2fr 3fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1m-1l-1l-1m {\n\t\t-ms-grid-columns: 2fr 3fr 3fr 2fr;\n\t\tgrid-template-columns: 2fr 3fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1m-1l-1l-1l {\n\t\t-ms-grid-columns: 2fr 3fr 3fr 3fr;\n\t\tgrid-template-columns: 2fr 3fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1s-1s-1s {\n\t\t-ms-grid-columns: 3fr 1fr 1fr 1fr;\n\t\tgrid-template-columns: 3fr 1fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1s-1s-1m {\n\t\t-ms-grid-columns: 3fr 1fr 1fr 2fr;\n\t\tgrid-template-columns: 3fr 1fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1s-1s-1l {\n\t\t-ms-grid-columns: 3fr 1fr 1fr 3fr;\n\t\tgrid-template-columns: 3fr 1fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1s-1m-1s {\n\t\t-ms-grid-columns: 3fr 1fr 2fr 1fr;\n\t\tgrid-template-columns: 3fr 1fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1s-1m-1m {\n\t\t-ms-grid-columns: 3fr 1fr 2fr 2fr;\n\t\tgrid-template-columns: 3fr 1fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1s-1m-1l {\n\t\t-ms-grid-columns: 3fr 1fr 2fr 3fr;\n\t\tgrid-template-columns: 3fr 1fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1s-1l-1s {\n\t\t-ms-grid-columns: 3fr 1fr 3fr 1fr;\n\t\tgrid-template-columns: 3fr 1fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1s-1l-1m {\n\t\t-ms-grid-columns: 3fr 1fr 3fr 2fr;\n\t\tgrid-template-columns: 3fr 1fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1s-1l-1l {\n\t\t-ms-grid-columns: 3fr 1fr 3fr 3fr;\n\t\tgrid-template-columns: 3fr 1fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1m-1s-1s {\n\t\t-ms-grid-columns: 3fr 2fr 1fr 1fr;\n\t\tgrid-template-columns: 3fr 2fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1m-1s-1m {\n\t\t-ms-grid-columns: 3fr 2fr 1fr 2fr;\n\t\tgrid-template-columns: 3fr 2fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1m-1s-1l {\n\t\t-ms-grid-columns: 3fr 2fr 1fr 3fr;\n\t\tgrid-template-columns: 3fr 2fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1m-1m-1s {\n\t\t-ms-grid-columns: 3fr 2fr 2fr 1fr;\n\t\tgrid-template-columns: 3fr 2fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1m-1m-1m {\n\t\t-ms-grid-columns: 3fr 2fr 2fr 2fr;\n\t\tgrid-template-columns: 3fr 2fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1m-1m-1l {\n\t\t-ms-grid-columns: 3fr 2fr 2fr 3fr;\n\t\tgrid-template-columns: 3fr 2fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1m-1l-1s {\n\t\t-ms-grid-columns: 3fr 2fr 3fr 1fr;\n\t\tgrid-template-columns: 3fr 2fr 3fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1m-1l-1m {\n\t\t-ms-grid-columns: 3fr 2fr 3fr 2fr;\n\t\tgrid-template-columns: 3fr 2fr 3fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1m-1l-1l {\n\t\t-ms-grid-columns: 3fr 2fr 3fr 3fr;\n\t\tgrid-template-columns: 3fr 2fr 3fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1l-1s-1s {\n\t\t-ms-grid-columns: 3fr 3fr 1fr 1fr;\n\t\tgrid-template-columns: 3fr 3fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1l-1s-1m {\n\t\t-ms-grid-columns: 3fr 3fr 1fr 2fr;\n\t\tgrid-template-columns: 3fr 3fr 1fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1l-1s-1l {\n\t\t-ms-grid-columns: 3fr 3fr 1fr 3fr;\n\t\tgrid-template-columns: 3fr 3fr 1fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1l-1m-1s {\n\t\t-ms-grid-columns: 3fr 3fr 2fr 1fr;\n\t\tgrid-template-columns: 3fr 3fr 2fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1l-1m-1m {\n\t\t-ms-grid-columns: 3fr 3fr 2fr 2fr;\n\t\tgrid-template-columns: 3fr 3fr 2fr 2fr;\n\t}\n\n\t.columns-4.size-1l-1l-1m-1l {\n\t\t-ms-grid-columns: 3fr 3fr 2fr 3fr;\n\t\tgrid-template-columns: 3fr 3fr 2fr 3fr;\n\t}\n\n\t.columns-4.size-1l-1l-1l-1s {\n\t\t-ms-grid-columns: 3fr 3fr 1fr 1fr;\n\t\tgrid-template-columns: 3fr 3fr 1fr 1fr;\n\t}\n\n\t.columns-4.size-1l-1l-1l-1m {\n\t\t-ms-grid-columns: 3fr 3fr 3fr 2fr;\n\t\tgrid-template-columns: 3fr 3fr 3fr 2fr;\n\t}\n}\n\n@media(min-width: 1268px) {\n\n\t.columns-6,\n\t.columns-12 {\n\t\tgrid-template-columns: repeat(6, 1fr);\n\t}\n\n\t.columns-7 {\n\t\tgrid-template-columns: repeat(7, 1fr);\n\t}\n\n\t.columns-8 {\n\t\tgrid-template-columns: repeat(8, 1fr);\n\t}\n\n\t.columns-9 {\n\t\tgrid-template-columns: repeat(9, 1fr);\n\t}\n\n\t.columns-10 {\n\t\tgrid-template-columns: repeat(10, 1fr);\n\t}\n\n\t.columns-11 {\n\t\tgrid-template-columns: repeat(11, 1fr);\n\t}\n}\n\n@media(min-width: 1366px) {\n\t.columns-12 {\n\t\tgrid-template-columns: repeat(12, 1fr);\n\t}\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/header.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".header {\n    padding: 1rem;\n}\n\n@media(min-width:1268px) {\n    .header {\n        padding: 1rem 0;\n    }\n}\n\n.bg_red {\n    background: red;\n}\n\n.bg_green {\n    background: green;\n}\n\n.bg_primary {\n    background: var(--color-primary);\n}\n\n.text_white {\n    color:#fff;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/icon.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".fill-primary {\n    fill:green;\n   background: green; \n   background: green;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #a2ab58, #636363);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #a2ab58, #636363); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n.fill-secondary {\n    fill:green;\n    background: green; \n    background: green;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #a2ab58, #636363);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #a2ab58, #636363); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n }\n\n .gradient-element {\n    background: green;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #a2ab58, #636363);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #a2ab58, #636363); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    \n }";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/image.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/navbar.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".navbar {\n\tposition: relative;\n\tdisplay: block;\n\ttop: 0;\n\twidth: 100%;\n\tbackground: var(--color-primary);\n\twidth: 100%;\n\tz-index: 5;\n\tpadding: 1rem 0rem;\n\ttransition: top ease-in-out 0.3s;\n}\n\n.navbar__container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\topacity: 1;\n\twidth: 100%;\n\tmax-width: 95%;\n\tmargin: auto;\n}\n\n.navbar__brand {\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tmax-width: 6rem;\n\tcolor: var(--color-white);\n\t-webkit-animation-name: fadeIn;\n\t-webkit-animation-duration: 0.5s;\n\tanimation-name: fadeIn;\n\tanimation-duration: 0.5s;\n}\n\n.navbar__menu {\n\tdisplay: none;\n\tjustify-content: flex-end;\n\twidth: auto;\n\t-webkit-animation-name: fadeIn;\n\t-webkit-animation-duration: 0.5s;\n\tanimation-name: fadeIn;\n\tanimation-duration: 0.5s;\n}\n\n@-webkit-keyframes fadeIn {\n\t0% {\n\t\topacity: 0;\n\t}\n\n\t20% {\n\t\topacity: 0;\n\t}\n\n\t40% {\n\t\topacity: 0.3;\n\t}\n\n\t60% {\n\t\topacity: 0.5;\n\t}\n\n\t80% {\n\t\topacity: 0.9;\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes fadeIn {\n\t0% {\n\t\topacity: 0;\n\t}\n\n\t20% {\n\t\topacity: 0;\n\t}\n\n\t40% {\n\t\topacity: 0.3;\n\t}\n\n\t60% {\n\t\topacity: 0.5;\n\t}\n\n\t80% {\n\t\topacity: 0.9;\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t}\n}\n\n.navbar__menu-list {\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tmin-width: 488px;\n}\n\n.navbar__menu-item a {\n\tcolor: #fff;\n}\n\n@media(min-width: 768px) {\n\t.navbar__menu {\n\t\tdisplay: flex;\n\t}\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/progressbar.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "/* \n\nprogressbar\n-------------------------------------\n\n*/\n\n.progressbar{\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\theight: 10rem;\n\tposition: relative;\n\twidth: 10rem;\n\tbottom: -109px;\n}\n\n.progressbar:before {\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: #fff;\n\tborder-radius: 50%;\n\tcontent: attr(data-progress) '% Completed';\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tfont-size: 0.8em;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\tposition: absolute;\n\tleft: 0.5rem;\n\tright: 0.5rem;\n\ttop: 0.5rem;\n\tbottom: 0.5rem;\n\t-webkit-box-shadow: var(--shadow-2);\n\tbox-shadow: var(--shadow-2);\n\ttransition: -webkit-transform 2s ease;\n\t-webkit-transition: -webkit-transform 2s ease;\n\ttransition: transform 2s ease;\n\ttransition: transform 2s ease, -webkit-transform 2s ease;\n\ttransition: transform 2s ease, -webkit-transform 0.2s ease;\n}\n\n.progressbar:after {\n\tbackground-color: #ddd;\n\tborder-radius: 50%;\n\tcontent: '';\n\tdisplay: inline-block;\n\theight: 100%;\n\twidth: 100%;\n\t-webkit-transition: 2s ease-in-out;\n\ttransition: 2s ease-in-out;\n}\n\n.progressbar:hover:before,\n.progressbar:focus:before {\n\t-webkit-transform: scale(0.8);\n\ttransform: scale(0.8);\n\n}\n\n.progressbar[data-progress=\"0\"]:after {\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(50%, #ddd), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, left top, right top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(90deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"1\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(93.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"2\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(97.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"3\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(100.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"4\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(104.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"5\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(108deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"6\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(111.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"7\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(115.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"8\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(118.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"9\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(122.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"10\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(126deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"11\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(129.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"12\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(133.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"13\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(136.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"14\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(140.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"15\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(144deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"16\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(147.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"17\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(151.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"18\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(154.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"19\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(158.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"20\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(162deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"21\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(165.60000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"22\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(169.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"23\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(172.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"24\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(176.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"25\"]:after {\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(50%, #ddd), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"26\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(183.60000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"27\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(187.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"28\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(190.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"29\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(194.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"30\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(198deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"31\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(201.60000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"32\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(205.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"33\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(208.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"34\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(212.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"35\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(216deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"36\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(219.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"37\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(223.20000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"38\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(226.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"39\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(230.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"40\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(234deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"41\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(237.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"42\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(241.20000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"43\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(244.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"44\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(248.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"45\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(252deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"46\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(255.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"47\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(259.20000000000005deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"48\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(262.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"49\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(266.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"50\"]:after {\n\tbackground-image: -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(-90deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"51\"]:after {\n\tbackground-image: linear-gradient(-86.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"52\"]:after {\n\tbackground-image: linear-gradient(-82.8deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"53\"]:after {\n\tbackground-image: linear-gradient(-79.2deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"54\"]:after {\n\tbackground-image: linear-gradient(-75.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"55\"]:after {\n\tbackground-image: linear-gradient(-72deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"56\"]:after {\n\tbackground-image: linear-gradient(-68.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"57\"]:after {\n\tbackground-image: linear-gradient(-64.8deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"58\"]:after {\n\tbackground-image: linear-gradient(-61.2deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"59\"]:after {\n\tbackground-image: linear-gradient(-57.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"60\"]:after {\n\tbackground-image: linear-gradient(-54deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"61\"]:after {\n\tbackground-image: linear-gradient(-50.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"62\"]:after {\n\tbackground-image: linear-gradient(-46.8deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"63\"]:after {\n\tbackground-image: linear-gradient(-43.199999999999996deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"64\"]:after {\n\tbackground-image: linear-gradient(-39.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"65\"]:after {\n\tbackground-image: linear-gradient(-36deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"66\"]:after {\n\tbackground-image: linear-gradient(-32.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"67\"]:after {\n\tbackground-image: linear-gradient(-28.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"68\"]:after {\n\tbackground-image: linear-gradient(-25.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"69\"]:after {\n\tbackground-image: linear-gradient(-21.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"70\"]:after {\n\tbackground-image: linear-gradient(-18deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"71\"]:after {\n\tbackground-image: linear-gradient(-14.399999999999991deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"72\"]:after {\n\tbackground-image: linear-gradient(-10.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"73\"]:after {\n\tbackground-image: linear-gradient(-7.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"74\"]:after {\n\tbackground-image: linear-gradient(-3.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"75\"]:after {\n\tbackground-image: -webkit-gradient(linear, left bottom, left top, color-stop(50%, var(--color-primary)), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(0deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"76\"]:after {\n\tbackground-image: linear-gradient(3.600000000000009deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"77\"]:after {\n\tbackground-image: linear-gradient(7.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"78\"]:after {\n\tbackground-image: linear-gradient(10.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"79\"]:after {\n\tbackground-image: linear-gradient(14.400000000000006deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"80\"]:after {\n\tbackground-image: linear-gradient(18deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"81\"]:after {\n\tbackground-image: linear-gradient(21.60000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"82\"]:after {\n\tbackground-image: linear-gradient(25.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"83\"]:after {\n\tbackground-image: linear-gradient(28.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"84\"]:after {\n\tbackground-image: linear-gradient(32.400000000000006deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"85\"]:after {\n\tbackground-image: linear-gradient(36deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"86\"]:after {\n\tbackground-image: linear-gradient(39.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"87\"]:after {\n\tbackground-image: linear-gradient(43.20000000000002deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"88\"]:after {\n\tbackground-image: linear-gradient(46.80000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"89\"]:after {\n\tbackground-image: linear-gradient(50.400000000000006deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"90\"]:after {\n\tbackground-image: linear-gradient(54deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"91\"]:after {\n\tbackground-image: linear-gradient(57.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"92\"]:after {\n\tbackground-image: linear-gradient(61.20000000000002deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"93\"]:after {\n\tbackground-image: linear-gradient(64.80000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"94\"]:after {\n\tbackground-image: linear-gradient(68.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"95\"]:after {\n\tbackground-image: linear-gradient(72deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"96\"]:after {\n\tbackground-image: linear-gradient(75.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"97\"]:after {\n\tbackground-image: linear-gradient(79.20000000000002deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"98\"]:after {\n\tbackground-image: linear-gradient(82.80000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"99\"]:after {\n\tbackground-image: linear-gradient(86.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"100\"]:after {\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(50%, var(--color-primary)), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(90deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/silo.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "[class*=\"flex-simple\"] {\n    display: flex;\n    flex-direction: column;\n}\n\n@media(max-width: 768px) {\n    [class*=\"sm:justify-start\"] {\n        justify-content: flex-start;\n    }\n    [class*=\"sm:justify-end\"] {\n        justify-content: flex-end;\n    }\n    [class*=\"sm:justify-center\"] {\n        justify-content: center;\n    }\n    [class*=\"sm:justify-stretch\"] {\n        justify-content: stretch;\n    }\n    [class*=\"sm:items-start\"] {\n        align-items: flex-start;\n    }\n    [class*=\"sm:items-end\"] {\n        align-items: flex-end;\n    }\n    [class*=\"sm:items-center\"] {\n        align-items: center;\n    }\n    [class*=\"sm:items-stretch\"] {\n        align-items: stretch;\n    }\n}\n\n@media(min-width: 768px){\n\n    [class*=\"md:justify-start\"] {\n        justify-content: flex-start;\n    }\n    [class*=\"md:justify-end\"] {\n        justify-content: flex-end;\n    }\n\n    [class*=\"md:justify-center\"] {\n        justify-content: center;\n    }\n\n    [class*=\"md:justify-stretch\"] {\n        justify-content: stretch;\n    }\n\n    [class*=\"md:items-start\"] {\n        align-items: flex-start;\n    }\n    [class*=\"md:items-end\"] {\n        align-items: flex-end;\n    }\n    [class*=\"md:items-center\"] {\n        align-items: center;\n    }\n    [class*=\"md:items-stretch\"] {\n        align-items: stretch;\n    }\n}\n\n\n@media(min-width: 1024px){\n\n    [class*=\"lg:justify-start\"] {\n        justify-content: flex-start;\n    }\n    [class*=\"lg:justify-end\"] {\n        justify-content: flex-end;\n    }\n\n    [class*=\"lg:justify-center\"] {\n        justify-content: center;\n    }\n\n    [class*=\"lg:justify-stretch\"] {\n        justify-content: stretch;\n    }\n\n    [class*=\"lg:items-start\"] {\n        align-items: flex-start;\n    }\n    [class*=\"lg:items-end\"] {\n        align-items: flex-end;\n    }\n    [class*=\"lg:items-center\"] {\n        align-items: center;\n    }\n    [class*=\"lg:items-stretch\"] {\n        align-items: stretch;\n    }\n}\n\n.image-overlay {\n    -webkit-box-shadow: 16px -16px 0px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 16px -16px 0px 0px rgba(0,0,0,0.75);\n    box-shadow: 16px -16px 0px 0px rgba(0,0,0,0.75);\n}\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/test.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "body {\n    background: red!important;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/repository/utilities.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".margin-left {\n    margin-left: auto;\n}\n\n.margin-right {\n    margin-right: auto;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/stylesheet.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "*,\n*::after,\n*::before {\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box\n}\n\nhtml {\n\toverflow-x: hidden;\n\tscroll-behavior: smooth;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-text-size-adjust: 100%;\n\t-ms-text-size-adjust: 100%;\n\ttext-rendering: optimizeLegibility;\n\tline-height: 1.6;\n\tfont-size: 19px;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Open Sans\", \"Archivo Black\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\t--color-primary: #0e0e0e;\n\t--color-secondary: #002fff;\n\t--color-tertiary: #305900;\n\t--color-quaternary: #00337d;\n\t--color-white: white;\n\t--color-black: black;\n\t--color-cat: #1d1300;\n\t--boxshadow-primary: 0px 1px 2px 0px #99a3ad, 0px 0px 2px rgba(0, 0, 0, 0.72);\n\t--boxshadow-secondary: 0px 1px 2px 0px #99a3ad, 0px 0px 2px rgba(0, 0, 0, 0.72);\n\t--boxshadow-tertiary: 0px 1px 2px 0px #99a3ad, 0px 0px 2px rgba(0, 0, 0, 0.72);\n\t--boxshadow-quaternary: 0px 1px 2px 0px #99a3ad, 0px 0px 2px rgba(0, 0, 0, 0.72);\n\t--page-maxwidth: 1468px;\n}\n\nbody {\n\tfont-family: \"Open Sans\";\n\tmargin: 0;\n}\n\nh1,\nh3,\nh2 {\n\tfont-family: \"Archivo Black\";\n}\n\nh2 {\n\tfont-size: 2rem;\n\tcolor: #000;\n\tfont-family: \"Archivo Black\";\n\tgrid-column: 1 / -1;\n\ttext-align: center\n}\n\nimg {\n\tdisplay: block;\n\theight: auto;\n\tmax-width: 100%;\n}\n\na {\n\ttext-decoration: none;\n}\n\nul {\n\tlist-style: none;\n\tmargin: 0;\n}\n\n\nimg {\n\twidth: 100%;\n\theight: auto;\n}\n\n#main-content {\n\tpadding: 2rem 0rem;\n}";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/arrow.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"1em\"\n  height=\"1em\"\n  viewBox=\"0 0 24 24\"\n  focusable=\"false\"\n  aria-hidden=\"true\"\n  fill=\"currentColor\"\n>\n  <path\n    d=\"M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z\"\n  />\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/brain.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<path fill=\"#409700\" class=\"secondary-color\" d=\"M197.9,30.1l-57.8,57.8L82.3,30.1H197.9z\"></path>\n<path d=\"M445.4,395.8c0,20.3-16.5,36.8-36.8,36.8c-4.4,0-8-3.6-8-8s3.6-8,8-8c11.4,0,20.8-9.3,20.8-20.8c0-4.4,3.6-8,8-8\n\tS445.4,391.4,445.4,395.8z M466.7,395.8c0-4.4-3.6-8-8-8s-8,3.6-8,8c0,20.3,16.5,36.8,36.8,36.8c4.4,0,8-3.6,8-8s-3.6-8-8-8\n\tC476,416.5,466.7,407.2,466.7,395.8z M487.4,437.8c-20.3,0-36.8,16.5-36.8,36.8c0,4.4,3.6,8,8,8s8-3.6,8-8\n\tc0-11.4,9.3-20.8,20.8-20.8c4.4,0,8-3.6,8-8S491.8,437.8,487.4,437.8z M408.7,437.8c-4.4,0-8,3.6-8,8s3.6,8,8,8\n\tc11.4,0,20.8,9.3,20.8,20.8c0,4.4,3.6,8,8,8s8-3.6,8-8C445.4,454.3,428.9,437.8,408.7,437.8z M433.6,121.9h43c4.4,0,8-3.6,8-8\n\ts-3.6-8-8-8h-43c-4.4,0-8,3.6-8,8S429.1,121.9,433.6,121.9z M476.8,228.1v43c0,4.4,3.6,8,8,8s8-3.6,8-8v-43c0-4.4-3.6-8-8-8\n\tS476.8,223.7,476.8,228.1z M36.5,126.1c4.4,0,8-3.6,8-8V44.3c0-4.4-3.6-8-8-8s-8,3.6-8,8v73.8C28.5,122.5,32.1,126.1,36.5,126.1z\n\t M73.6,427.7H57.8v-15.8c0-4.4-3.6-8-8-8s-8,3.6-8,8v15.8H26.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h15.8v15.8c0,4.4,3.6,8,8,8s8-3.6,8-8\n\tv-15.8h15.8c4.4,0,8-3.6,8-8S78,427.7,73.6,427.7z M448,51h3.9v3.9c0,4.4,3.6,8,8,8s8-3.6,8-8V51h3.9c4.4,0,8-3.6,8-8s-3.6-8-8-8\n\th-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8V35H448c-4.4,0-8,3.6-8,8S443.6,51,448,51z M55.7,253.2c5.9,0,10.8-4.8,10.8-10.8\n\ts-4.8-10.8-10.8-10.8s-10.8,4.8-10.8,10.8S49.7,253.2,55.7,253.2z M358.2,30.2c4.4,0,8-3.6,8-8s-3.6-8-8-8\n\tc-14.6,0-26.4,11.8-26.4,26.4S343.6,67,358.2,67c4.4,0,8-3.6,8-8s-3.6-8-8-8c-5.7,0-10.4-4.7-10.4-10.4S352.4,30.2,358.2,30.2z\"></path>\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"305.0294\" y1=\"417.4298\" x2=\"305.0294\" y2=\"115.6629\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M262.3,368.6h2.9c1.9,0,3.5,1.6,3.5,3.5l0,0c0,15.3-6.2,29.2-16.2,39.2c-10,10-23.9,16.3-39.2,16.3\n\tc-15.2,0-28.9-6.1-38.9-16c-3.6-3.5-0.7-9.6,4.2-9.3c2.5,0.2,5,0.3,7.6,0.3c28.3,0,53.9-11.5,72.4-30\n\tC259.9,371.3,261.1,370,262.3,368.6z M413.8,268.5c14.2-9.9,23.4-26.3,23.4-44.9c0-30.2-24.5-54.7-54.7-54.7c-2.6,0-5.3,0.2-7.8,0.6\n\tc1.7-5.4,2.6-11.2,2.5-17.2c-0.5-29.8-25.3-54-55.2-53.8c-2.5,0-5.1,0.2-7.5,0.6c31.7,6.7,43.6,46.7,27.8,72.3\n\tc2.6-0.4,5.2-0.6,7.8-0.6c30.2,0,47.6,4,48.3,43.9c0.3,16-6.9,30.4-17.8,40.4c-2.8,2.5-3,6.8-0.6,9.6c8.2,9.6,13.1,22,13.1,35.5\n\tc0,40.7-19.6,44.1-44.4,43.6c-6.3-0.1-5.7,16.4-5.1,22.7c0.1,1.6,0.2,3.3,0.2,5c0,23.6-14.9,43.7-35.9,51.3c-3.9,1.4-4,6.9-0.1,8.4\n\tc6.8,2.7,14.3,4.1,22.1,3.8c27.9-1,50.8-23.3,52.5-51.2c0.4-7.1-0.5-13.9-2.5-20.2c28.9-1.4,51.9-25.3,51.9-54.6\n\tC432,293,425,278.5,413.8,268.5z\"></path>\n<path d=\"M442.1,227.6c2.5-16.8-1.7-33.5-11.7-47.1c-10.1-13.6-24.9-22.5-41.6-25c-0.5-0.1-1-0.1-1.5-0.2c0.1-0.4,0.1-0.8,0.1-1.2\n\tc0-35-28.5-63.5-63.5-63.5c-23.7,0-44.4,13-55.3,32.3c-10.9-19.3-31.6-32.3-55.3-32.3c-35,0-63.5,28.5-63.5,63.5\n\tc0,0.4,0,0.8,0.1,1.2c-0.5,0.1-1,0.1-1.5,0.2c-16.8,2.5-31.5,11.4-41.6,25s-14.2,30.4-11.7,47.1c2.3,15.3,9.9,28.9,21.6,38.9\n\tc-10.3,11.3-16.5,26.3-16.5,42.7c0,30.2,20.9,55.5,49.4,61.9c0,3.6,0,7.4,0,7.6c0.3,16.7,7.1,32.3,19,44\n\tc11.9,11.7,27.7,18.2,44.5,18.2c24,0,44.9-13.4,55.7-33c10.8,19.7,31.7,33,55.7,33c30.8,0,57-21.9,62.5-52.2\n\tc0.8-4.3-2.1-8.5-6.5-9.3c-4.3-0.8-8.5,2.1-9.3,6.5c-4.1,22.6-23.7,39-46.7,39c-26.2,0-47.5-21.3-47.5-47.5c0-0.9-0.1-1.7-0.4-2.5\n\tv-106c0-4.5,0-18.3,22.1-26.2c12.4-4.4,25.3-4.5,25.4-4.5c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8c0,0,0,0,0,0c-0.6,0-15.4,0.1-30.4,5.3\n\tc-6.6,2.3-12.4,5.4-17.1,9v-80c0.3-0.8,0.4-1.6,0.4-2.5c0-1.5-0.1-3-0.2-4.5c2.3-24.1,22.6-43,47.2-43c26.2,0,47.5,21.3,47.5,47.5\n\tc0,0.4,0,0.8,0.1,1.2c-10.7,1.3-20.9,5.4-29.8,12c-3.6,2.6-4.3,7.6-1.7,11.2c2.6,3.6,7.6,4.3,11.2,1.7c10.2-7.5,22.7-10.7,35.2-8.8\n\tc12.5,1.9,23.6,8.5,31.1,18.7c7.5,10.2,10.7,22.7,8.8,35.2c-1.8,12.3-8.3,23.2-18.2,30.7c-9.9-6.5-21.8-10.2-34.5-10.2\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8c26.2,0,47.5,21.3,47.5,47.5c0,24.4-18.6,44.6-42.3,47.2c-1.5-13.1-12.7-23.3-26.2-23.3\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8c5.7,0,10.4,4.7,10.4,10.4s-4.7,10.4-10.4,10.4c-4.4,0-8,3.6-8,8s3.6,8,8,8c9.8,0,18.3-5.3,22.9-13.2\n\tc34.2-0.9,61.7-29,61.7-63.4c0-16.4-6.3-31.4-16.5-42.7C432.2,256.6,439.8,242.9,442.1,227.6z M212.9,424.9\n\tc-25.7,0-47-20.9-47.5-46.5c0-0.3,0-2.9,0-5.8c7.3,0,20.6,0,20.7,0c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.9,0-23,0-24.7,0\n\tc-25.4-1.1-45.4-21.9-45.4-47.4c0-26.2,21.3-47.5,47.5-47.5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-12.7,0-24.6,3.8-34.5,10.2\n\tc-20.5-15.7-24.8-45.1-9.4-65.9c13.8-18.7,39-24.3,59.1-14.3c-8.2,10.7-13,24-13,38.5c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8\n\tc0-26.2,21.3-47.5,47.5-47.5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-14.5,0-27.9,4.9-38.7,13.2c-7.7-4.6-16.1-7.5-24.8-8.6\n\tc0.1-0.4,0.1-0.8,0.1-1.2c0-26.2,21.3-47.5,47.5-47.5c24.7,0,45,18.9,47.2,43c-0.1,1.3-0.2,2.6-0.2,3.9c0,0.1,0,0.2,0,0.3v174.1\n\tc-5.9-1.8-13.5-6.8-18.6-21.1c-4.4-12.4-4.5-25.3-4.5-25.4c0-4.4-3.6-8-8-8c0,0,0,0,0,0c-4.4,0-8,3.6-8,8c0,0.6,0.1,15.4,5.3,30.4\n\tc6.5,18.4,18.3,29.7,33.8,32.4v33.1c0,0,0,0.1,0,0.1C260.4,403.6,239.1,424.9,212.9,424.9z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/check.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"311.245\" y1=\"418.6947\" x2=\"309.1064\" y2=\"221.9423\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M490.9,265v115.3c0,14.7-11.9,26.7-26.7,26.7h-308c-14.7,0-26.7-11.9-26.7-26.7V265\n\tc0-14.7,11.9-26.7,26.7-26.7h308C478.9,238.3,490.9,250.3,490.9,265z\"></path>\n<path d=\"M346.3,222.2h-24.1c-4.4,0-8-3.6-8-8s3.6-8,8-8h24.1c4.4,0,8,3.6,8,8S350.8,222.2,346.3,222.2z M402.5,214.2\n\tc0-4.4-3.6-8-8-8h-24.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1C398.9,222.2,402.5,218.7,402.5,214.2z M450.7,214.2c0-4.4-3.6-8-8-8h-24.1\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1C447.1,222.2,450.7,218.7,450.7,214.2z M450.7,358.8c0-4.4-3.6-8-8-8h-96.4c-4.4,0-8,3.6-8,8\n\ts3.6,8,8,8h96.4C447.1,366.8,450.7,363.2,450.7,358.8z M221.8,334.7c0-4.4-3.6-8-8-8H81.4c-4.4,0-8,3.6-8,8s3.6,8,8,8h132.5\n\tC218.3,342.7,221.8,339.1,221.8,334.7z M354.3,286.5c0-4.4-3.6-8-8-8h-265c-4.4,0-8,3.6-8,8s3.6,8,8,8h265\n\tC350.8,294.5,354.3,290.9,354.3,286.5z M258,214.2c0-4.4-3.6-8-8-8H81.4c-4.4,0-8,3.6-8,8s3.6,8,8,8H250\n\tC254.4,222.2,258,218.7,258,214.2z M450.7,214.2c0-4.4-3.6-8-8-8h-24.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1\n\tC447.1,222.2,450.7,218.7,450.7,214.2z M402.5,214.2c0-4.4-3.6-8-8-8h-24.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1\n\tC398.9,222.2,402.5,218.7,402.5,214.2z M354.3,214.2c0-4.4-3.6-8-8-8h-24.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1\n\tC350.8,222.2,354.3,218.7,354.3,214.2z M258,214.2c0-4.4-3.6-8-8-8H81.4c-4.4,0-8,3.6-8,8s3.6,8,8,8H250\n\tC254.4,222.2,258,218.7,258,214.2z M498.9,407V142c0-4.4-3.6-8-8-8H33.2c-4.4,0-8,3.6-8,8v48.2c0,4.4,3.6,8,8,8s8-3.6,8-8V150h441.7\n\tv249H41.2V238.3c0-4.4-3.6-8-8-8s-8,3.6-8,8V407c0,4.4,3.6,8,8,8h457.7C495.3,415,498.9,411.4,498.9,407z M450.7,214.2\n\tc0-4.4-3.6-8-8-8h-24.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1C447.1,222.2,450.7,218.7,450.7,214.2z M402.5,214.2c0-4.4-3.6-8-8-8h-24.1\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8h24.1C398.9,222.2,402.5,218.7,402.5,214.2z M354.3,214.2c0-4.4-3.6-8-8-8h-24.1c-4.4,0-8,3.6-8,8\n\ts3.6,8,8,8h24.1C350.8,222.2,354.3,218.7,354.3,214.2z M258,214.2c0-4.4-3.6-8-8-8H81.4c-4.4,0-8,3.6-8,8s3.6,8,8,8H250\n\tC254.4,222.2,258,218.7,258,214.2z\"></path>\n<g>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M321.7,64.1V17.8h21.6v46.3H321.7z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M366.2,64.1V17.8h22.5v46.3H366.2z M496.3,64.4V17.6h-88.6v46.8H496.3z\"></path>\n</g>\n<path d=\"M70.8,472.3c3.1,3.1,3.1,8.2,0,11.3c-5,5-11.6,7.7-18.7,7.7s-13.7-2.7-18.7-7.7c-10.3-10.3-10.3-27,0-37.3\n\tc3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3c-4.1,4.1-4.1,10.6,0,14.7c2,2,4.6,3,7.3,3s5.4-1.1,7.3-3\n\tC62.6,469.2,67.7,469.2,70.8,472.3z M481.8,474c-5,0-9,4.1-9,9s4.1,9,9,9s9-4.1,9-9S486.8,474,481.8,474z M33.7,41.9c5,0,9-4.1,9-9\n\ts-4.1-9-9-9s-9,4.1-9,9S28.7,41.9,33.7,41.9z M361.4,95.8c0-4.4-3.6-8-8-8h-86.8c-4.4,0-8,3.6-8,8s3.6,8,8,8h86.8\n\tC357.9,103.8,361.4,100.2,361.4,95.8z M377.7,475.1h-86.8c-4.4,0-8,3.6-8,8s3.6,8,8,8h86.8c4.4,0,8-3.6,8-8S382.1,475.1,377.7,475.1\n\tz\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/check_1.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"255.5656\" y1=\"447.6738\" x2=\"255.5656\" y2=\"66.2078\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"fill-primaryr\"></stop>\n\t<stop offset=\"1\" class=\"fill-secondary\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M370,85.2l-45.1,55.4c-7.4,9.1-6,22.5,3.1,29.9l14.8,12c9.1,7.4,10.5,20.8,3.1,29.9L220.9,365.5\n\tc-7.9,9.7-22.5,10.5-31.4,1.6l-81.5-81.4c-8.3-8.3-21.7-8.3-30,0l-15,15l128.9,128.7c8.9,8.9,23.6,8.1,31.5-1.7l224.5-278\n\tc0.5-0.6,0.4-1.4-0.2-1.9L370,85.2z\"></path>\n<path d=\"M208.5,454.1c-2.1,0-4.1-0.8-5.7-2.3L57.3,306.4c-1.5-1.5-2.3-3.5-2.3-5.7c0-2.1,0.8-4.2,2.3-5.7l23.8-23.8\n\tc3.1-3.1,8.2-3.1,11.3,0c3.1,3.1,3.1,8.2,0,11.3l-18.1,18.1l133.6,133.4l229.6-284.2l-48.7-39.3c-3.4-2.8-4-7.8-1.2-11.3\n\tc2.8-3.4,7.8-4,11.3-1.2l54.9,44.3c1.7,1.3,2.7,3.3,2.9,5.4s-0.4,4.2-1.7,5.9L214.8,451.1c-1.4,1.8-3.5,2.8-5.8,3\n\tC208.8,454.1,208.7,454.1,208.5,454.1z M200.3,303.1c-2.1,0-4.1-0.8-5.7-2.3l-60.3-60.2l-18.2,18.2c-3.1,3.1-8.2,3.1-11.3,0\n\tc-3.1-3.1-3.1-8.2,0-11.3l23.9-23.9c3.1-3.1,8.2-3.1,11.3,0l59.7,59.6l164-202.9c2.8-3.4,7.8-4,11.3-1.2c3.4,2.8,4,7.8,1.2,11.3\n\tL206.6,300.1c-1.4,1.8-3.5,2.8-5.8,3C200.6,303.1,200.5,303.1,200.3,303.1z\"></path>\n<path d=\"M118.5,435.6c0,4.4-3.6,8-8,8h-65c-4.4,0-8-3.6-8-8s3.6-8,8-8h65C114.9,427.6,118.5,431.2,118.5,435.6z M115.5,274.6\n\tc0-4.4-3.6-8-8-8H20.6c-4.4,0-8,3.6-8,8s3.6,8,8,8h86.8C111.9,282.6,115.5,279.1,115.5,274.6z M173,44.4c0,5-4.1,9-9,9s-9-4.1-9-9\n\ts4.1-9,9-9S173,39.4,173,44.4z M203,44.4c0,5-4.1,9-9,9s-9-4.1-9-9s4.1-9,9-9S203,39.4,203,44.4z M214.9,44.4c0-5,4.1-9,9-9\n\ts9,4.1,9,9s-4.1,9-9,9S214.9,49.4,214.9,44.4z M133,36.4H45.5c-4.4,0-8,3.6-8,8V222c0,4.4,3.6,8,8,8s8-3.6,8-8V52.4H133\n\tc4.4,0,8-3.6,8-8S137.4,36.4,133,36.4z M253.4,52.4H341c4.4,0,8-3.6,8-8s-3.6-8-8-8h-87.6c-4.4,0-8,3.6-8,8S249,52.4,253.4,52.4z\n\t M487.4,467.6H225c-4.4,0-8,3.6-8,8s3.6,8,8,8h262.4c4.4,0,8-3.6,8-8S491.8,467.6,487.4,467.6z M487.4,427.6H291.6c-4.4,0-8,3.6-8,8\n\ts3.6,8,8,8h195.8c4.4,0,8-3.6,8-8S491.8,427.6,487.4,427.6z M333,395.6c0,4.4,3.6,8,8,8h146.4c4.4,0,8-3.6,8-8s-3.6-8-8-8H341\n\tC336.5,387.6,333,391.2,333,395.6z\"></path>\n<g>\n\t<path class=\"fill-primary\" d=\"M87.5,99.8L87.5,99.8c-8.4,0-15.2-6.8-15.2-15.2v0c0-8.4,6.8-15.2,15.2-15.2h0c8.4,0,15.2,6.8,15.2,15.2v0\n\t\tC102.7,93,95.9,99.8,87.5,99.8z M152.7,84.6L152.7,84.6c0-8.4-6.8-15.2-15.2-15.2h0c-8.4,0-15.2,6.8-15.2,15.2v0\n\t\tc0,8.4,6.8,15.2,15.2,15.2h0C145.9,99.8,152.7,93,152.7,84.6z M202.7,84.6L202.7,84.6c0-8.4-6.8-15.2-15.2-15.2h0\n\t\tc-8.4,0-15.2,6.8-15.2,15.2v0c0,8.4,6.8,15.2,15.2,15.2h0C195.9,99.8,202.7,93,202.7,84.6z M152.7,134.6L152.7,134.6\n\t\tc0-8.4-6.8-15.2-15.2-15.2h0c-8.4,0-15.2,6.8-15.2,15.2v0c0,8.4,6.8,15.2,15.2,15.2h0C145.9,149.8,152.7,143,152.7,134.6z\n\t\t M102.7,134.6L102.7,134.6c0-8.4-6.8-15.2-15.2-15.2h0c-8.4,0-15.2,6.8-15.2,15.2v0c0,8.4,6.8,15.2,15.2,15.2h0\n\t\tC95.9,149.8,102.7,143,102.7,134.6z M102.7,184.6L102.7,184.6c0-8.4-6.8-15.2-15.2-15.2h0c-8.4,0-15.2,6.8-15.2,15.2v0\n\t\tc0,8.4,6.8,15.2,15.2,15.2h0C95.9,199.8,102.7,193,102.7,184.6z\"></path>\n\t<path class=\"fill-secondary\" d=\"M487.4,235.2v125.1H362.3L487.4,235.2z\"></path>\n</g>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/clicker.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"284.2684\" y1=\"452.9162\" x2=\"284.2684\" y2=\"161.3189\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M404,215.8v94.4c0,8.5-1.2,16.9-3.7,25l-23.9,118.4H197.5c0,0-10.7-11.5-25.9-28.3\n\tc-15.5-17.2-3.4-44.7,19.7-44.7h60.3c38.3,0,69.3-31.2,69.3-69.7V182c0-7.5,6.8-13.1,14.1-11.6l32.6,6.6\n\tC396.4,184,404,205.4,404,215.8z\"></path>\n<path d=\"M197.5,460c-2.1,0-4.3-0.9-5.8-2.5c-0.3-0.4-33.2-35.6-65.7-72.6c-67.5-77-67.5-86.4-67.5-91.4c0-19.2,9-30.4,16.6-36.5\n\tc8.4-6.7,19.5-10.5,30.3-10.5c2.6,0,5.2,0.5,7.7,1.4c14.6,5.8,23.8,13.5,36.4,24.2c3.9,3.3,8.1,6.8,12.9,10.7V86\n\tc0-10.9,3.8-22,10.5-30.4c6-7.6,17.2-16.8,36.5-16.8c19.2,0,30.4,9,36.5,16.6c6.7,8.4,10.5,19.5,10.5,30.3v60.7l97.3,19.5\n\tc0.1,0,0.2,0,0.3,0.1l15.3,3.1c0.1,0,0.2,0,0.3,0.1c33.7,8.2,42.6,34,42.6,46.5v93.8c0,9.1-1.3,18.1-3.9,26.8l-23.8,117.4\n\tc-0.8,3.7-4,6.4-7.8,6.4H235.2c-4.4,0-8-3.6-8-8s3.6-8,8-8h134.7l22.6-111.3c0-0.2,0.1-0.5,0.2-0.7c2.2-7.3,3.3-14.9,3.3-22.6v-93.8\n\tc0-8.1-6.3-25-30.2-30.9l-5.7-1.1v45c0,4.4-3.6,8-8,8s-8-3.6-8-8v-48.2l-35.9-7.2v65.4c0,4.4-3.6,8-8,8s-8-3.6-8-8v-68.6l-35.9-7.2\n\tv85.8c0,4.4-3.6,8-8,8s-8-3.6-8-8V85.7c0-10.7-6.5-30.9-30.9-30.9S178.3,75.2,178.3,86v213.1c0,3-1.7,5.8-4.4,7.2\n\tc-2.7,1.4-5.9,1.1-8.4-0.7c-11.1-8.3-19.6-15.5-26.4-21.2c-11.9-10-19.7-16.7-31.9-21.5c-0.6-0.2-1.2-0.3-1.9-0.3\n\tc-10.7,0-30.8,6.4-30.9,30.6c0.8,3.2,8,18,65.3,83.2c31.7,36.1,63.3,69.9,63.6,70.3c3,3.2,2.8,8.3-0.4,11.3\n\tC201.4,459.3,199.4,460,197.5,460z\"></path>\n<g>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M475.6,460.2H461v-53.8h14.6V460.2z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M475.6,229.8H461V176h14.6V229.8z M475.6,252.8H461v53.8h14.6V252.8z M475.6,329.6H461v53.8h14.6V329.6z\n\t\t M36,35v60.9L96.9,35H36z\"></path>\n</g>\n<path d=\"M131.7,473c0,4.4-3.6,8-8,8H44.1c-4.4,0-8-3.6-8-8s3.6-8,8-8h79.5C128.1,465,131.7,468.6,131.7,473z M432.7,31.1\n\tc-4.4,0-8,3.6-8,8c0,11.4-9.3,20.8-20.8,20.8c-4.4,0-8,3.6-8,8s3.6,8,8,8c20.3,0,36.8-16.5,36.8-36.8\n\tC440.7,34.7,437.1,31.1,432.7,31.1z M482.7,75.8c4.4,0,8-3.6,8-8s-3.6-8-8-8c-11.4,0-20.8-9.3-20.8-20.8c0-4.4-3.6-8-8-8s-8,3.6-8,8\n\tC446,59.3,462.4,75.8,482.7,75.8z M482.7,81.1c-20.3,0-36.8,16.5-36.8,36.8c0,4.4,3.6,8,8,8s8-3.6,8-8c0-11.4,9.3-20.8,20.8-20.8\n\tc4.4,0,8-3.6,8-8S487.1,81.1,482.7,81.1z M404,81.1c-4.4,0-8,3.6-8,8s3.6,8,8,8c11.4,0,20.8,9.3,20.8,20.8c0,4.4,3.6,8,8,8\n\ts8-3.6,8-8C440.7,97.6,424.2,81.1,404,81.1z M89.7,179.7c4.4,0,8-3.6,8-8s-3.6-8-8-8c-5.7,0-10.4-4.7-10.4-10.4\n\tc0-5.7,4.7-10.4,10.4-10.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-14.6,0-26.4,11.8-26.4,26.4S75.1,179.7,89.7,179.7z M44.3,408.4h3.9v3.9\n\tc0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9c4.4,0,8-3.6,8-8s-3.6-8-8-8h-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8\n\tS39.9,408.4,44.3,408.4z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/collaboration.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<g>\n\t<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"307.6146\" y1=\"482.9081\" x2=\"307.6146\" y2=\"406.3538\" class=\"gradient-element\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_1_)\" d=\"M353.9,482.8h-63.7c-16,0-28.9-12.9-28.9-28.9v-20.1c0-10.9,7.1-20.4,17.5-23.7\n\t\tc2.2-0.7,4.5-1.5,6.8-2.5c0,0-3.3,12.2,22.9,23.7C334.8,442.7,351.1,450.3,353.9,482.8z\"></path>\n\t<linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"310.7397\" y1=\"354.0217\" x2=\"260.5901\" y2=\"354.0217\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_2_)\" d=\"M261.1,297.5c1.7-1,46.5,5.2,46.5,5.2s4.6,27.7,0,66.6c-2.7,22.5-17.8,34.2-30.1,40.1\n\t\tc-7.6,3.7-16.4-2-16.4-10.4v-96.9C261.1,302.1,259.4,298.5,261.1,297.5z\"></path>\n\t<linearGradient id=\"SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"453.4386\" y1=\"251.1384\" x2=\"453.4386\" y2=\"174.5842\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_3_)\" d=\"M499.7,251H436c-16,0-28.9-12.9-28.9-28.9V202c0-10.9,7.1-20.4,17.5-23.7c2.2-0.7,4.5-1.5,6.8-2.5\n\t\tc0,0-3.3,12.2,22.9,23.7C480.6,210.9,496.9,218.6,499.7,251z\"></path>\n\t<linearGradient id=\"SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"456.5637\" y1=\"122.2521\" x2=\"406.4142\" y2=\"122.2521\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_4_)\" d=\"M407,65.8c1.7-1,46.5,5.2,46.5,5.2s4.6,27.7,0,66.6c-2.7,22.5-17.8,34.2-30.1,40.1\n\t\tc-7.6,3.7-16.4-2-16.4-10.4V70.4C407,70.4,405.3,66.7,407,65.8z\"></path>\n\t<linearGradient id=\"SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"164.141\" y1=\"245.8338\" x2=\"164.141\" y2=\"169.2796\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_5_)\" d=\"M210.4,245.7h-63.7c-16,0-28.9-12.9-28.9-28.9v-20.1c0-10.9,7.1-20.4,17.5-23.7\n\t\tc2.2-0.7,4.5-1.5,6.8-2.5c0,0-3.3,12.2,22.9,23.7C191.3,205.6,207.6,213.3,210.4,245.7z\"></path>\n\t<linearGradient id=\"SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"167.2662\" y1=\"116.9475\" x2=\"117.1166\" y2=\"116.9475\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_6_)\" d=\"M117.7,60.5c1.7-1,46.5,5.2,46.5,5.2s4.6,27.7,0,66.6c-2.7,22.5-17.8,34.2-30.1,40.1\n\t\tc-7.6,3.7-16.4-2-16.4-10.4V65.1C117.7,65.1,116,61.4,117.7,60.5z\"></path>\n</g>\n<path d=\"M76,258.3h131.1c4.3,0,7.8-3.3,8-7.6c0.7-14.5-6.9-45.5-40.7-59.2c-20.1-8.1-27-14.4-29.3-17.1\n\tc12.5-9.5,18.9-23.1,21.7-30.6c1.8-4.8,2.6-9.9,2.6-15.1V86.8c1.1,0.6,2.4,0.9,3.6,0.9c1.2,0,2.5-0.3,3.6-0.9\n\tc18.3-9.4,38-15.5,58.4-18.3c4.4-0.6,7.4-4.6,6.8-9c-0.6-4.4-4.6-7.4-9-6.8c-22.2,3-43.5,9.7-63.5,19.9V60.9c0-2.6-1.3-5.1-3.5-6.6\n\tc-2.2-1.5-4.9-1.8-7.4-0.9c-7.3,2.8-14.7,1-23.2-1.2c-11.7-2.9-26.3-6.6-41.6,4.3c-3.6,2.6-4.5,7.6-1.9,11.2s7.6,4.5,11.2,1.9\n\tc8.8-6.3,16.6-4.8,28.5-1.8c6.7,1.7,14.1,3.5,22,3v57.9c0,3.3-0.6,6.6-1.7,9.6c-4.1,11.4-14.6,30.4-38.5,30.4\n\tc-22.4,0-33.2-15.3-38.4-28.1c-1.3-3.3-2-6.8-2-10.5l0-63.2c0-7.5,4.6-13.1,8.5-16.4c9.1-7.9,23.1-11.5,36.5-9.5\n\tc4.8,0.7,9.2,2,13.5,3.2c11.3,3.2,23,6.5,38.4,0.1c4.1-1.7,6-6.4,4.3-10.5s-6.4-6-10.5-4.3c-10.3,4.3-17.7,2.2-27.9-0.7\n\tc-4.6-1.3-9.8-2.8-15.5-3.6c-17.9-2.7-36.8,2.4-49.3,13.2c-9,7.8-14,17.9-14,28.5l0,63.2c0,5.7,1.1,11.2,3.1,16.4\n\tc2.8,6.9,9.2,19.4,21.3,28.2c-2.1,2.4-6.9,6.8-17.9,12C6.9,208.1,11.8,249.6,12,251.3c0.5,4,3.9,6.9,7.9,6.9h40\n\tc0.7,20.1,4.3,39.8,10.9,58.7c1.1,3.3,4.2,5.4,7.6,5.4c0.9,0,1.8-0.1,2.6-0.4c4.2-1.4,6.4-6,4.9-10.2\n\tC80.1,294.5,76.7,276.6,76,258.3z M69.4,201.5c0.1-0.1,0.3-0.1,0.4-0.2c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0\n\tc14.9-7.1,22.2-13.9,25.6-19.2c5.1,1.6,10.9,2.6,17.3,2.6c6.6,0,12.4-1,17.6-2.7c4.2,6.6,14.6,15.1,37.6,24.4c22,8.9,28.3,26,30,36\n\tH28.3C30,232.2,37.5,213.5,69.4,201.5z M419.3,373.6c-22.1,28.7-51.8,50.9-85.2,64.2c20.1,15.4,25,38.2,24.4,50\n\tc-0.2,4.3-3.7,7.6-8,7.6H163.5c-4.3,0-7.8-3.4-8-7.7c-0.1-1.4-0.3-13.9,8-29.9c2-3.9,6.9-5.4,10.8-3.4c3.9,2,5.4,6.9,3.4,10.8\n\tc-2.8,5.5-4.4,10.4-5.2,14.2h169.4c-1.7-9.6-7.6-25.8-27.6-34.9c-0.7,0.2-1.4,0.4-2.1,0.6c-0.7,0.2-1.4,0.3-2.1,0.3\n\tc-3.5,0-6.8-2.4-7.7-5.9c0,0,0-0.1,0-0.1c-16.5-7.7-24.5-14.6-28.1-20.3c-5.2,1.7-11,2.7-17.6,2.7c-6.5,0-12.6-1-18.3-3\n\tc-4.3,5.7-13.6,15.2-31.4,23.7c-0.3,0.1-0.6,0.3-0.9,0.4c-0.1,0-0.1,0-0.2,0.1c-0.3,0.1-0.6,0.2-0.9,0.2c-0.1,0-0.2,0-0.3,0\n\tc-0.4,0.1-0.8,0.1-1.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.4,0-0.7,0-1.1-0.1c-0.1,0-0.2-0.1-0.3-0.1\n\tc-0.3-0.1-0.5-0.1-0.8-0.2c0,0-0.1,0-0.1,0c-38.8-12-72.7-35.3-98.1-67.3c-2.7-3.5-2.2-8.5,1.3-11.2c3.5-2.7,8.5-2.2,11.2,1.3\n\tc22.7,28.7,52.8,49.7,87.2,61c11.1-5.7,17.6-11.6,21-15.5c-8.7-6.5-15.7-15.8-20.4-27.6c-2.1-5.2-3.1-10.7-3.1-16.4v-63.2\n\tc0-10.6,5-20.7,14-28.5c12.6-10.8,31.5-15.9,49.3-13.2c5.8,0.9,10.9,2.3,15.5,3.6c10.2,2.9,17.6,5,27.9,0.7\n\tc4.1-1.7,8.8,0.2,10.5,4.3c1.7,4.1-0.2,8.8-4.3,10.5c-15.4,6.4-27.1,3.1-38.4-0.1c-4.3-1.2-8.8-2.5-13.5-3.2\n\tc-13.4-2-27.4,1.6-36.5,9.5c-3.9,3.3-8.5,8.9-8.5,16.4v63.2c0,3.6,0.7,7.2,2,10.5c5.2,12.8,16,28.1,38.4,28.1\n\tc23.9,0,34.4-19.1,38.5-30.4c1.1-3.1,1.7-6.3,1.7-9.6v-57.9c-7.9,0.5-15.2-1.3-22-3c-11.9-3-19.6-4.5-28.5,1.8\n\tc-3.6,2.6-8.6,1.7-11.2-1.9c-2.6-3.6-1.7-8.6,1.9-11.2c15.3-10.8,29.9-7.2,41.6-4.3c8.5,2.1,15.9,4,23.2,1.2\n\tc2.5-0.9,5.2-0.6,7.4,0.9s3.5,4,3.5,6.6v67.7c0,5.2-0.9,10.3-2.6,15.1c-2.7,7.5-9.1,21.2-21.7,30.6c2.2,2.7,8.6,8.5,26.7,16.1\n\tc36-11.2,68.2-33.6,91.3-63.7c2.7-3.5,7.7-4.1,11.2-1.5C421.3,365,422,370.1,419.3,373.6z M463.7,196.8c-20.1-8.1-27-14.4-29.3-17.1\n\tc12.5-9.5,18.9-23.1,21.7-30.6c1.8-4.8,2.6-9.9,2.6-15.1V66.2c0-2.6-1.3-5.1-3.5-6.6c-2.2-1.5-4.9-1.8-7.4-0.9\n\tc-7.3,2.8-14.7,1-23.2-1.2c-11.7-2.9-26.3-6.6-41.6,4.3c-3.6,2.6-4.5,7.6-1.9,11.2c2.6,3.6,7.5,4.5,11.2,1.9\n\tc8.8-6.3,16.6-4.8,28.5-1.8c6.7,1.7,14.1,3.5,22,3v57.9c0,3.3-0.6,6.6-1.7,9.6c-4.1,11.4-14.6,30.4-38.5,30.4\n\tc-22.4,0-33.2-15.3-38.4-28.1c-1.3-3.3-2-6.8-2-10.5V72.1c0-7.5,4.6-13.1,8.5-16.4c9.1-7.9,23.1-11.5,36.5-9.5\n\tc4.8,0.7,9.2,2,13.5,3.2c11.3,3.2,23,6.5,38.4,0.1c4.1-1.7,6-6.4,4.3-10.5c-1.7-4.1-6.4-6-10.5-4.3C442.6,39,435.2,36.9,425,34\n\tc-4.6-1.3-9.8-2.8-15.5-3.6c-17.9-2.7-36.8,2.4-49.3,13.2c-8.4,7.3-13.3,16.6-14,26.4c-22.4-10.6-46.3-16.9-71.3-18.7\n\tc-4.4-0.3-8.2,3-8.5,7.4c-0.3,4.4,3,8.2,7.4,8.6c25.5,1.8,49.8,8.8,72.3,20.6v47.5c0,5.7,1.1,11.2,3.1,16.4\n\tc4.9,12.2,12.2,21.7,21.3,28.2c-2.2,2.6-7,6.8-17.7,11.9c-26,8.2-38.7,24.8-44.7,37.3c-6.6,13.7-6.9,25.6-6.9,26.1\n\tc0,2.1,0.8,4.2,2.3,5.8s3.6,2.4,5.7,2.4h135.2c-1.1,16.5-4.3,32.6-9.7,48.2c-1.4,4.2,0.8,8.7,4.9,10.2c0.9,0.3,1.8,0.4,2.6,0.4\n\tc3.3,0,6.4-2.1,7.6-5.4c6-17.2,9.5-35.2,10.6-53.4h35.9c4.3,0,7.8-3.3,8-7.6C505.1,241.4,497.5,210.4,463.7,196.8z M460,247.6\n\tc-1.3-2.6-4-4.3-7.1-4.3s-5.8,1.8-7.1,4.3H318.5c2.7-11.5,11.6-31.9,39.7-40.6c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1\n\tc0.2-0.1,0.3-0.1,0.5-0.2c0,0,0.1,0,0.1-0.1c15-7.2,22.3-14,25.8-19.3c5.4,1.7,11.2,2.6,17.3,2.6c6.6,0,12.4-1,17.6-2.7\n\tc4.2,6.6,14.6,15.1,37.6,24.4c22,8.9,28.3,26,30,36H460z\"></path>\n<g>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M8.4,335.8h35.2v22.5H8.4V335.8z M8.4,424h35.2v-22.5H8.4V424z\"></path>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M8.4,369.2h35.2v21.6H8.4V369.2z\"></path>\n</g>\n<path d=\"M79.7,440c-14.6,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4s26.4-11.8,26.4-26.4S94.2,440,79.7,440z M79.7,476.8\n\tc-5.7,0-10.4-4.7-10.4-10.4S74,456,79.7,456s10.4,4.7,10.4,10.4S85.4,476.8,79.7,476.8z M208.7,458c0,4.4-3.6,8-8,8h-69\n\tc-4.4,0-8-3.6-8-8s3.6-8,8-8h69C205.1,450,208.7,453.6,208.7,458z M506.2,157.2c0,4.4-3.6,8-8,8h-3.9v3.9c0,4.4-3.6,8-8,8\n\ts-8-3.6-8-8v-3.9h-3.9c-4.4,0-8-3.6-8-8s3.6-8,8-8h3.9v-3.9c0-4.4,3.6-8,8-8s8,3.6,8,8v3.9h3.9C502.6,149.2,506.2,152.8,506.2,157.2\n\tz M51.6,31.4c0,4.4-3.6,8-8,8h-3.9v3.9c0,4.4-3.6,8-8,8s-8-3.6-8-8v-3.9h-3.9c-4.4,0-8-3.6-8-8s3.6-8,8-8h3.9v-3.9c0-4.4,3.6-8,8-8\n\ts8,3.6,8,8v3.9h3.9C48,23.4,51.6,27,51.6,31.4z M495,436.8c0,4.4-3.6,8-8,8c-11.4,0-20.8,9.3-20.8,20.8c0,4.4-3.6,8-8,8s-8-3.6-8-8\n\tc0-20.3,16.5-36.8,36.8-36.8C491.4,428.8,495,432.3,495,436.8z M445,465.5c0,4.4-3.6,8-8,8s-8-3.6-8-8c0-11.4-9.3-20.8-20.8-20.8\n\tc-4.4,0-8-3.6-8-8s3.6-8,8-8C428.5,428.8,445,445.3,445,465.5z M445,386.8c0,20.3-16.5,36.8-36.8,36.8c-4.4,0-8-3.6-8-8s3.6-8,8-8\n\tc11.4,0,20.8-9.3,20.8-20.8c0-4.4,3.6-8,8-8S445,382.3,445,386.8z M495,415.5c0,4.4-3.6,8-8,8c-20.3,0-36.8-16.5-36.8-36.8\n\tc0-4.4,3.6-8,8-8s8,3.6,8,8c0,11.4,9.3,20.8,20.8,20.8C491.4,407.5,495,411.1,495,415.5z M143.4,307.3c5.5,0,9.9-4.4,9.9-9.9\n\tc0-5.5-4.4-9.9-9.9-9.9s-9.9,4.4-9.9,9.9C133.5,302.9,137.9,307.3,143.4,307.3z M330.7,22.5c-5.5,0-9.9,4.4-9.9,9.9s4.4,9.9,9.9,9.9\n\tc5.5,0,9.9-4.4,9.9-9.9S336.1,22.5,330.7,22.5z M409.8,317.8h-59.2c-4.4,0-8-3.6-8-8s3.6-8,8-8h59.2c4.4,0,8,3.6,8,8\n\tS414.2,317.8,409.8,317.8z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/cursor.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"256.3008\" y1=\"425.9845\" x2=\"256.3008\" y2=\"111.9301\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M206.2,326.2l9.6,9.6l-34.4,34.4l-13-43.4l0.6-0.6C179.3,315.9,195.9,315.9,206.2,326.2z\n\t M310.2,241.4l71.5-71.5L119.9,91.4c-10.4-3.1-20.1,6.6-17,17v0c1.3,4.4,4.8,7.8,9.2,9.2l170.1,51c15.5,4.6,20.4,24.1,9,35.5\n\tl-15.5,15.5c-17,17-17,44.6,0,61.6l54.1,54.1c8.4,8.4,8.4,22.1,0,30.5c-2.7,2.7-2.7,7,0,9.7l23.4,23.4l57.2-57.2L310.2,241.4z\"></path>\n<path d=\"M329.1,230.5c-2,0-4.1-0.8-5.7-2.3c-3.1-3.1-3.1-8.2,0-11.3l43.1-43.1L107.5,96l28.2,94.1c1.3,4.2-1.1,8.7-5.4,10\n\tc-4.2,1.3-8.7-1.1-10-5.4L88,86.4c-0.8-2.8-0.1-5.9,2-8c2.1-2.1,5.1-2.9,8-2L384,162.3c2.7,0.8,4.8,3,5.5,5.7\n\tc0.7,2.7-0.1,5.6-2.1,7.6l-52.5,52.5C333.2,229.7,331.2,230.5,329.1,230.5z M358.7,404.5l57.2-57.2c3.1-3.1,3.1-8.2,0-11.3\n\tL315.8,235.8c-3.1-3.1-8.2-3.1-11.3,0c-3.1,3.1-3.1,8.2,0,11.3l94.5,94.5l-45.9,45.9L258.6,293c-3.1-3.1-8.2-3.1-11.3,0l-62,62\n\tl-40.5-134.9c-1.3-4.2-5.7-6.6-10-5.4c-4.2,1.3-6.6,5.7-5.4,10l44.3,147.7c0.8,2.7,3,4.8,5.7,5.5c2.7,0.7,5.6-0.1,7.6-2.1l65.9-65.9\n\tl94.5,94.5c1.5,1.5,3.5,2.3,5.7,2.3S357.2,406,358.7,404.5z\"></path>\n<path fill=\"#000000\" d=\"M166.6,192.5c0,4.4-3.6,8-8,8h-43c-4.4,0-8-3.6-8-8s3.6-8,8-8h43C163,184.5,166.6,188,166.6,192.5z\n\t M146.9,214.5H73.1c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h73.8c4.4,0,8-3.6,8-8C154.9,218,151.3,214.5,146.9,214.5z M485.6,238.1h-15.8\n\tv-15.8c0-4.4-3.6-8-8-8s-8,3.6-8,8v15.8H438c-4.4,0-8,3.6-8,8s3.6,8,8,8h15.8v15.8c0,4.4,3.6,8,8,8s8-3.6,8-8v-15.8h15.8\n\tc4.4,0,8-3.6,8-8S490,238.1,485.6,238.1z M91.7,375.4c-4.4,0-8,3.6-8,8c0,11.4-9.3,20.8-20.8,20.8c-4.4,0-8,3.6-8,8s3.6,8,8,8\n\tc20.3,0,36.8-16.5,36.8-36.8C99.7,379,96.1,375.4,91.7,375.4z M141.7,404.2c-11.4,0-20.8-9.3-20.8-20.8c0-4.4-3.6-8-8-8s-8,3.6-8,8\n\tc0,20.3,16.5,36.8,36.8,36.8c4.4,0,8-3.6,8-8S146.1,404.2,141.7,404.2z M141.7,425.4c-20.3,0-36.8,16.5-36.8,36.8c0,4.4,3.6,8,8,8\n\ts8-3.6,8-8c0-11.4,9.3-20.8,20.8-20.8c4.4,0,8-3.6,8-8S146.1,425.4,141.7,425.4z M62.9,425.4c-4.4,0-8,3.6-8,8s3.6,8,8,8\n\tc11.4,0,20.8,9.3,20.8,20.8c0,4.4,3.6,8,8,8s8-3.6,8-8C99.7,441.9,83.2,425.4,62.9,425.4z M441.7,447.7c-5.9,0-10.8,4.8-10.8,10.7\n\tc0,5.9,4.8,10.8,10.8,10.8c5.9,0,10.8-4.8,10.8-10.8C452.4,452.5,447.6,447.7,441.7,447.7z\"></path>\n<g>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M338.3,33.7v35.2h-21.6V33.7H338.3z M453.4,33.7V111h22.5V33.7H453.4z M408.1,33.7V111h21.6V33.7H408.1z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M384.4,33.7v35.2H362V33.7H384.4z\"></path>\n</g>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/doctor.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<g>\n\t<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"406.5063\" y1=\"256.9677\" x2=\"264.7923\" y2=\"256.9677\" class=\"gradient-element\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_1_)\" d=\"M399.4,251.7c-8.4,70.3-60.7,83.4-83.8,90.1c10.5-0.1,20.5-1.8,27.9-6.1c24.8-14.5-0.6,9.3-0.6,9.3\n\t\tl-34.2,63L272,346l-7.8-11.7c0,0,19.7,5.7,40.9,7.2v-226c0,0-3.4-7.4,0-9.4c3.4-1.9,94.4,10.6,94.4,10.6S408.9,172.9,399.4,251.7z\"></path>\n\t<linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"307.9395\" y1=\"490.9592\" x2=\"307.9395\" y2=\"353.4968\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_2_)\" d=\"M381.8,369.2V491l-95.8,0h-51.8V373.3l38.7-19.8l32.6,54.5l38.2-54.5l23.6,10.4L381.8,369.2z\"></path>\n</g>\n<path d=\"M176.7,204.1c0,4.4-3.6,8-8,8H67.6c-4.4,0-8-3.6-8-8s3.6-8,8-8h101.1C173.1,196.1,176.7,199.7,176.7,204.1z M459,273.3h-3.9\n\tv-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8s3.6,8,8,8h3.9v3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9c4.4,0,8-3.6,8-8\n\tS463.4,273.3,459,273.3z M466.6,69.1c4.2-4.2,4.2-11,0-15.2c-4.2-4.2-11-4.2-15.2,0c-4.2,4.2-4.2,11,0,15.2\n\tC455.6,73.3,462.4,73.3,466.6,69.1z M55.9,91.3c4.4,0,8-3.6,8-8s-3.6-8-8-8c-5.7,0-10.4-4.7-10.4-10.4s4.7-10.4,10.4-10.4\n\tc4.4,0,8-3.6,8-8s-3.6-8-8-8c-14.6,0-26.4,11.8-26.4,26.4S41.4,91.3,55.9,91.3z M119.9,417.3H77c-4.4,0-8,3.6-8,8s3.6,8,8,8h43\n\tc4.4,0,8-3.6,8-8S124.4,417.3,119.9,417.3z M98.5,447.3H24.7c-4.4,0-8,3.6-8,8s3.6,8,8,8h73.8c4.4,0,8-3.6,8-8\n\tS102.9,447.3,98.5,447.3z M42.1,373c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h35.1c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5H42.1z\n\t M35.3,312.2c20.3,0,36.7-16.5,36.7-36.8c0-4.4-3.6-8-8-8s-8,3.6-8,8c0,11.4-9.3,20.8-20.7,20.8c-4.4,0-8,3.6-8,8\n\tS30.9,312.2,35.3,312.2z M114,312.2c4.4,0,8-3.6,8-8s-3.6-8-8-8c-11.4,0-20.8-9.3-20.8-20.8c0-4.4-3.6-8-8-8s-8,3.6-8,8\n\tC77.3,295.7,93.8,312.2,114,312.2z M85.3,362.2c4.4,0,8-3.6,8-8c0-11.4,9.3-20.8,20.8-20.8c4.4,0,8-3.6,8-8s-3.6-8-8-8\n\tc-20.3,0-36.8,16.5-36.8,36.8C77.3,358.6,80.9,362.2,85.3,362.2z M35.3,333.5c11.4,0,20.7,9.3,20.7,20.8c0,4.4,3.6,8,8,8s8-3.6,8-8\n\tc0-20.3-16.5-36.8-36.7-36.8c-4.4,0-8,3.6-8,8S30.9,333.5,35.3,333.5z M30.9,168.2c0,4.4,3.6,8,8,8h66.9c4.4,0,8-3.6,8-8s-3.6-8-8-8\n\tH38.9C34.5,160.2,30.9,163.8,30.9,168.2z M168.7,59.4h-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8s3.6,8,8,8\n\th3.9v3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9c4.4,0,8-3.6,8-8S173.1,59.4,168.7,59.4z\"></path>\n<path d=\"M499.8,447.5c-7.8-20.2-24.6-47.1-60.6-64.4c-2-1.8-4.3-3.4-6.8-4.7c-0.1,0-0.2-0.1-0.3-0.1l-47-21.6\n\tc-2.5-1.1-5.4-0.9-7.7,0.5c-1,0.6-1.8,1.5-2.4,2.5c-12.5-4.4-23.5-8.6-27.1-10.9c-0.9-0.6-1.8-0.9-2.8-1.1\n\tc13.3-4.8,25.3-12.6,35.8-23.3c15.8-16,24.8-35.1,29.6-48.4c3.2-8.9,4.9-18.2,4.9-27.8V110.9c0-2.6-1.3-5.1-3.5-6.6\n\tc-2.2-1.5-4.9-1.8-7.4-0.9c-17.3,6.6-34.2,2.4-52-2.1c-23.3-5.8-49.7-12.4-77.6,7.3c-3.6,2.6-4.5,7.6-1.9,11.2\n\tc2.6,3.6,7.5,4.5,11.2,1.9c21.9-15.5,41.6-10.6,64.4-4.9c16.2,4.1,32.9,8.2,50.8,4.6v126.7c0,7.7-1.3,15.2-3.9,22.3\n\tc-9.1,25-32.3,67.1-85.9,67.1c-52.6,0-76.1-38.9-85.5-62.1c-3.1-7.7-4.6-15.8-4.6-24.3V123c0-18.4,10.9-31.6,20-39.5\n\tc20.3-17.5,51.2-25.6,80.7-21.2c10.2,1.5,19.5,4.2,28.5,6.7c22.5,6.4,43.8,12.4,72.4,0.5c4.1-1.7,6-6.4,4.3-10.5s-6.4-6-10.5-4.3\n\tc-23.5,9.8-40.4,5-61.9-1.1c-9.5-2.7-19.3-5.5-30.5-7.1c-33.9-5.1-69.8,4.4-93.5,24.9c-16.5,14.2-25.6,32.5-25.6,51.6v128.2\n\tc0,10.5,1.9,20.7,5.8,30.2c5,12.6,14.4,30.6,30.4,45.5c9,8.3,19,14.7,29.9,19.2c-0.2,0.1-0.5,0.2-0.7,0.4c-3.6,2-15.2,7-28.5,12.5\n\tc-0.5-0.7-1.2-1.3-1.9-1.8c-2.3-1.5-5.2-1.7-7.7-0.5l-47,21.6c-0.1,0-0.2,0.1-0.3,0.1c-4.6,2.3-8.4,5.6-11.2,9.6\n\tc-29.7,17.2-44.2,41.1-51.3,59.5c-9.1,23.5-8.3,43.1-8.2,43.9c0.2,4.4,4,7.8,8.4,7.6c4.4-0.2,7.8-3.9,7.6-8.4\n\tc0-0.2-0.7-17.5,7.4-37.9c6.6-16.8,16.9-30.7,30.8-41.7l19.4,81.9c0.9,3.7,4.2,6.2,7.8,6.2c0.6,0,1.2-0.1,1.9-0.2\n\tc4.3-1,7-5.3,5.9-9.6l-19.5-82.2c-0.1-2.4,0.4-4.8,1.4-7c3.9-2.1,8-4,12.3-5.8c2.2-0.9,5.3-2.1,9.1-3.6c7-2.8,14.1-5.7,21-8.5V491\n\tc0,4.4,3.6,8,8,8s8-3.6,8-8V375.6c11.4-4.7,21.3-8.8,27.9-11.8l32.2,48.7c1.5,2.2,4,3.6,6.7,3.6c0,0,0,0,0,0c2.7,0,5.2-1.3,6.7-3.6\n\tl30.8-46.6c6.4,2.8,15.6,6.2,27.4,10.3V491c0,4.4,3.6,8,8,8s8-3.6,8-8V381.7c0.3,0.1,0.6,0.2,1,0.3c13.4,4.6,26.1,8.9,34,12.1\n\tc1.8,0.7,3.5,1.5,5.2,2.2c2.5,2.9,3.8,6.6,3.7,10.5l-19.5,82.2c-1,4.3,1.6,8.6,5.9,9.6c0.6,0.1,1.2,0.2,1.9,0.2\n\tc3.6,0,6.9-2.5,7.8-6.2l19.7-82.9c0.1-0.4,0.2-0.8,0.2-1.3c0-0.3,0-0.7,0-1c16.1,11.4,27.8,26.5,35.1,45c8.1,20.5,7.4,37.8,7.4,37.9\n\tc-0.2,4.4,3.2,8.1,7.6,8.4c0.1,0,0.3,0,0.4,0c4.2,0,7.8-3.3,8-7.6C508.1,490.5,508.9,471,499.8,447.5z M308.8,393.5l-29-43.9\n\tc9.3,2.6,19.3,4,29.8,4c9.9,0,19.3-1.2,28.2-3.7c-0.3,0.3-0.6,0.7-0.9,1.1L308.8,393.5z M357.3,459.6h15.8v16h-15.8v15.8h-16v-15.8\n\th-15.8v-16h15.8v-15.8h16V459.6z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/feedback.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<g>\n\t<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"256.1401\" y1=\"491.0468\" x2=\"256.1401\" y2=\"25.6653\" class=\"gradient-element\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_1_)\" d=\"M20.5,199.1L20.5,199.1c0,0.7,0,1.4,0,2.1V199.1z M330.5,396.5c-51.5-21-44.1-33.5-44.1-33.5\n\t\tc-4.6,1.8-20.4,1.5-24.7,2.8c-20.3,6-35.6,16.2-35.6,36.1v36.9c0,29.2,25.3,52.9,56.6,52.9h124.8C402,432.3,382,417.5,330.5,396.5z\n\t\t M154.6,86.9v0.6c0,17.7-14.4,49.2-26,49.2H62.7c-22.9,0-41.5,27.7-42.2,62.4h28.4l5.7,29.6l45.6-29.6H160l-2.8-4.1\n\t\tc-0.8-28.2,19.4-60.9,51.6-66.4v0V28.5h-16C171.7,28.5,154.6,54.6,154.6,86.9z M435.4,267.7c0,0,12.8-27,12.8-39.8\n\t\tc0-6.8-5.5-12.4-12.4-12.4h-7l-0.9,2.8c-1.2,3.5-2.4,6.5-3.6,9c0,0.2,0,0.3,0,0.5c0,5.1-2.4,12.3-5.3,19.3\n\t\tc-4.1,9.8,3,20.5,13.6,20.5H435.4z M476.9,267.7H453c6.8,0,14.8,0,14.8,9.8c0,7.7-15.9,42.2-15.9,42.2\n\t\tc-3.9,15.4-8.9,19.6-23.6,19.6h24c14.7,0,19.8-4.2,23.6-19.6c0,0,15.9-34.5,15.9-42.2C491.8,267.6,483.8,267.7,476.9,267.7z\"></path>\n\t<linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"340.099\" y1=\"272.5997\" x2=\"252.8703\" y2=\"272.5997\">\n\t\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n\t</linearGradient>\n\t<path fill=\"url(#SVGID_2_)\" d=\"M253.8,368.4V184.3c0,0-2.9-6,0-7.6c2.9-1.6,80.9,8.6,80.9,8.6s8,45.8,0,110\n\t\tc-6.2,50.1-52.1,68-71.9,73.4L253.8,368.4z\"></path>\n</g>\n<g>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M439.9,22.6h16.4V39h-16.4V22.6z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M461.8,454.1h16.4v16.4h-16.4V454.1z\"></path>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M470.9,22.6h16.4V137h-16.4V22.6z\"></path>\n</g>\n<path d=\"M142.2,294.7c0,4.4-3.6,8-8,8H33.1c-4.4,0-8-3.6-8-8s3.6-8,8-8h101.1C138.7,286.7,142.2,290.3,142.2,294.7z M83.7,357.8\n\th-3.9V354c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8s3.6,8,8,8h3.9v3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9\n\tc4.4,0,8-3.6,8-8S88.1,357.8,83.7,357.8z\"></path>\n<path d=\"M110.8,209l-52,31.2c-1.3,0.8-2.7,1.1-4.1,1.1c-1.4,0-2.7-0.3-3.9-1c-2.5-1.4-4.1-4.1-4.1-7V209H11.5c-4.4,0-8-3.6-8-8V28.5\n\tc0-4.4,3.6-8,8-8h197.3c4.4,0,8,3.6,8,8v83c0,4.4-3.6,8-8,8s-8-3.6-8-8v-75H19.5V193h35.1c4.4,0,8,3.6,8,8v18.2l41.8-25.1\n\tc1.2-0.7,2.7-1.1,4.1-1.1H154c4.4,0,8,3.6,8,8s-3.6,8-8,8H110.8z M362.7,287.7c-1.8-1.5-2.9-3.7-2.9-6.2c0-4.4,3.6-8,8-8h12.4\n\tc0,0,0.1,0,0.1,0c1.4-0.9,4.5-6.2,6.7-9.8c1.6-2.6,3.5-5.9,5.8-9.4c5.2-7.9,10.5-12.6,14.8-16.4c6.1-5.3,10.5-9.1,14.8-22.1l0.9-2.8\n\tc1.1-3.3,4.1-5.5,7.6-5.5h7c11.2,0,20.4,9.1,20.4,20.4c0,12.3-5.6,23.4-11.1,31.8h31.9c0,0,0,0,0.1,0c4,0,8.8,0,13.1,1.9\n\tc3.6,1.6,9.7,5.7,9.7,15.9c0,8.4-11.2,33.7-16.3,44.9c-4.8,18.4-13,25-31.2,25h-33c-15.3,0-24.1-3.3-30.5-5.7\n\tc-4.3-1.6-6.9-2.6-10.8-2.6h-12.4c-4.4,0-8-3.6-8-8v-37.1C359.8,291.4,360.9,289.2,362.7,287.7z M374.5,289.5\n\tc0.8,1.3,1.3,2.8,1.3,4.4v29.1h4.4c6.8,0,11.4,1.7,16.4,3.6c5.9,2.2,12.5,4.7,24.9,4.7h33c10.4,0,12.7-1.1,15.8-13.6\n\tc0.1-0.5,0.3-1,0.5-1.4c7.1-15.5,14.9-34.8,15.1-38.9c0-0.6-0.1-1-0.1-1.2c-1.3-0.5-4.7-0.5-6.6-0.5c0,0,0,0,0,0H442\n\tc-4.4,0-8-3.6-8-8c-0.6-0.2-1.1-0.6-1.7-0.9c-3.6-2.6-4.3-7.6-1.7-11.2c5-6.9,11.8-17.3,11.8-27.7c0-2.4-2-4.4-4.4-4.4h-1.3\n\tc-5.6,15.1-12.2,20.9-18.5,26.4c-3.9,3.4-8,7-11.9,13.1c-2.1,3.2-3.9,6.2-5.5,8.9c-6.1,10.2-10.5,17.6-20.5,17.6H374.5z\n\t M352.8,200.3h150.1c4.4,0,8-3.6,8-8s-3.6-8-8-8H352.8c-4.4,0-8,3.6-8,8S348.4,200.3,352.8,200.3z M161.4,412.3\n\tc11.5-4.6,21.5-9.3,29.8-14c3.9-2.2,5.2-7,3.1-10.9c-2.2-3.9-7-5.2-10.9-3.1c-7.7,4.3-17.2,8.7-28,13.1\n\tc-34.1,13.8-49.5,37.8-56.4,55.6c-7.4,19.2-6.7,35.2-6.7,35.9c0.2,4.3,3.7,7.6,8,7.6c0.1,0,0.2,0,0.4,0c4.4-0.2,7.8-3.9,7.6-8.3\n\tC108.2,486,106.6,434.4,161.4,412.3z M502.9,356.7h-43.1c-4.4,0-8,3.6-8,8v18.2L410,357.9c-1.2-0.7-2.7-1.1-4.1-1.1h-75.5\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8h73.2l52,31.2c1.3,0.8,2.7,1.1,4.1,1.1c1.4,0,2.7-0.3,3.9-1c2.5-1.4,4.1-4.1,4.1-7v-24.3h35.1\n\tc4.4,0,8-3.6,8-8S507.3,356.7,502.9,356.7z M349.7,397.5c-12.7-5.1-23.5-10.3-32-15.4c-1.3-0.9-9.3-6.6-14.6-10.5\n\tc-4.1-3-6.6-4.8-8.1-5.9v-0.8c23.3-14.5,34.8-38.7,39.4-51.5c2.6-7.3,4-15,4-22.8V180.3c0-2.6-1.3-5.1-3.5-6.6\n\tc-2.2-1.5-4.9-1.8-7.4-0.9c-13.4,5.1-26.7,1.8-40.8-1.7c-19-4.8-40.6-10.1-63.6,6.1c-3.6,2.6-4.5,7.6-1.9,11.2\n\tc2.6,3.6,7.5,4.5,11.2,1.9c16.9-12,32.5-8.2,50.4-3.7c12.1,3,25.4,6.4,39.6,4.1v99.8c0,6-1,11.8-3,17.4\n\tc-7.2,19.7-25.4,52.8-67.4,52.8c-41.3,0-59.8-30.6-67.1-48.9c-2.4-6-3.6-12.3-3.6-18.9V190.1c0-14.1,8.4-24.4,15.5-30.5\n\tc15.9-13.7,40.3-20.1,63.5-16.6c8,1.2,15.5,3.3,22.7,5.3c17.5,5,35.7,10.1,59.1,0.3c4.1-1.7,6-6.4,4.3-10.5c-1.7-4.1-6.4-6-10.5-4.3\n\tc-18.3,7.6-31.7,3.8-48.6-1c-7.7-2.2-15.6-4.4-24.6-5.8c-27.7-4.2-56.9,3.6-76.3,20.3c-13.6,11.7-21.1,26.8-21.1,42.6v102.9\n\tc0,8.6,1.6,17,4.8,24.9c4.1,10.2,11.7,25,24.8,37.1c15.5,14.5,34.8,21.8,57.2,21.8c10.7,0,20.1-1.8,28.4-4.7l0.1,0.1\n\tc0.3,2,1.4,3.8,3.1,5.1l0.5,0.8l0.4-0.2c1.4,1,5.6,4,9.4,6.8c12.7,9.2,14.8,10.7,15.6,11.2c9.2,5.5,20.7,11.1,34.3,16.6\n\tc42.8,17.3,51.2,52.6,52.7,68.2H123.9c-4.4,0-8,3.6-8,8s3.6,8,8,8h280.8c4.3,0,7.8-3.3,8-7.6c0-0.7,0.7-16.7-6.7-35.9\n\tC399.2,435.3,383.8,411.3,349.7,397.5z M165,109c1.8,1.5,2.9,3.7,2.9,6.2c0,4.4-3.6,8-8,8h-12.4c0,0-0.1,0-0.1,0\n\tc-1.4,0.9-4.5,6.2-6.7,9.8c-1.6,2.6-3.5,5.9-5.8,9.4c-5.2,7.9-10.5,12.6-14.8,16.4c-6.1,5.3-10.4,9.1-14.8,22.1l-0.9,2.8\n\tc-1.1,3.3-4.1,5.5-7.6,5.5h-7c-11.2,0-20.4-9.1-20.4-20.4c0-12.3,5.6-23.4,11.1-31.8H48.7c0,0,0,0-0.1,0c-4,0-8.8,0-13.1-1.9\n\tc-3.6-1.6-9.7-5.7-9.7-15.9c0-8.4,11.2-33.7,16.3-44.9c4.8-18.4,13-25,31.2-25h33c15.3,0,24.1,3.3,30.5,5.7\n\tc4.3,1.6,6.9,2.6,10.8,2.6H160c4.4,0,8,3.6,8,8v37.1C168,105.3,166.8,107.6,165,109z M153.3,107.2c-0.8-1.3-1.3-2.8-1.3-4.4V73.7\n\th-4.4c-6.8,0-11.4-1.7-16.4-3.6c-5.9-2.2-12.5-4.7-24.9-4.7h-33c-10.4,0-12.7,1.1-15.8,13.6c-0.1,0.5-0.3,1-0.5,1.4\n\tc-7.1,15.5-14.9,34.8-15.1,38.9c0,0.6,0.1,1,0.1,1.2c1.3,0.5,4.7,0.5,6.6,0.5c0,0,0,0,0,0h37.2c4.4,0,8,3.6,8,8\n\tc0.6,0.2,1.1,0.6,1.7,0.9c3.6,2.6,4.3,7.6,1.7,11.2c-5.1,6.9-11.8,17.3-11.8,27.7c0,2.4,2,4.4,4.4,4.4h1.3\n\tc5.6-15.1,12.1-20.9,18.5-26.4c3.9-3.4,8-7,11.9-13.1c2.1-3.2,3.9-6.2,5.5-8.9c6.1-10.2,10.5-17.6,20.5-17.6H153.3z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/hand-icon.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"hand-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"315.7596\" y1=\"459.7577\" x2=\"315.7596\" y2=\"70.4345\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M374,146.2c0,41.1,0.1,164.4,0.1,164.4c0,36.2-7.5,56.2-13.5,72.4c-4.5,12.1-8,21.6-8,35.6l0,44.3\n\tl-80.7,0.1c-8,0-14.4-6.4-14.4-14.4l5.6-50.2c0-8,6.4-14.4,14.4-14.4h0c14.3,0,26-25.3,27.4-39.5l0.9-87.3l-0.1-184.3\n\tc0-9.5,11.7-14,18-6.9c4.3,4.9,7.1,11.7,7.1,20.5c0-9,8.6-14.7,18.5-14.7c8.3,0,13.8,2.1,17.5,6.3C366.8,77.8,374,81,374,146.2z\"></path>\n<path d=\"M223.1,459c-4.4,0-8-3.6-8-8l0-32.4c0-8.8-6.5-13.6-32-28.7c-7.2-4.3-15.4-9.1-24.2-14.9c-17.8-11.5-29.5-19.1-29.5-38.7\n\tc0-12.6-0.2-24.3-0.5-35.6c-1-50.7-1.6-84.1,21.5-91c2.8-0.8,16-1,21.4-1.1l-0.1-113.7c0-34.6,19.4-43.2,27.8-45.2\n\tc7.4-1.8,15.3-1.2,21.8,1.4c5.3-11,16.9-18.2,31.5-18.2c0,0,0,0,0,0c18.8,0,27.8,9.2,32.7,19.1c8.9-4.4,19.9-5,29.9-1.3\n\tc8.4,3.2,14.9,9,18.9,16.5c4.3-2.4,9.5-3.7,14.9-3.7c0,0,0,0,0,0c14,0,23.1,5.3,28,16.2c3.9,8.7,4.6,20,4.6,36.7l0.1,194.2\n\tc0,37.6-7.7,58.4-14,75.2c-4.4,11.8-7.5,20.3-7.5,32.8l0,32.4c0,4.4-3.6,8-8,8c0,0,0,0,0,0c-4.4,0-8-3.6-8-8l0-32.4\n\tc0-15.4,3.9-26,8.5-38.3c5.8-15.6,13-34.9,13-69.6L366,116.3c0-13.7-0.6-24.1-3.3-30.1c-1.5-3.4-3.8-6.7-13.3-6.7c0,0,0,0,0,0\n\tc-3.7,0-7.1,1.2-9,3.1c-1,1.1-1.5,2.2-1.5,3.6c0,0,0,0,0,0.1c0,0.2,0,0.5,0,0.7l0.1,126.5c0,4.4-3.6,8-8,8c0,0,0,0,0,0\n\tc-4.4,0-8-3.6-8-8L322.8,85c0-0.1,0-0.1,0-0.2c-0.5-12.7-8.2-17.5-12.9-19.2c-7.2-2.7-15.4-1.5-20.5,2.7l0.1,145.1c0,4.4-3.6,8-8,8\n\tc0,0,0,0,0,0c-4.4,0-8-3.6-8-8l-0.1-148.8c0-0.1,0-0.2,0-0.2c-3.7-11.6-9.1-15.6-20.5-15.6c0,0,0,0,0,0c-9.1,0-18.2,4.7-18.5,15.3\n\tc0,0.2,0,0.4,0,0.6l0.1,148.8c0,4.4-3.6,8-8,8c0,0,0,0,0,0c-4.4,0-8-3.6-8-8l-0.1-146c-2.3-1.7-8.4-4.1-15.2-2.3\n\tc-10,2.6-15.5,13.1-15.5,29.6l0.1,204c0,4.4-3.6,8-8,8c0,0,0,0,0,0c-4.4,0-8-3.6-8-8l0-74.3c-4.9,0.1-14.6,0.3-17.2,0.5\n\tc-11,4.1-10.4,37.1-9.7,75.3c0.2,11.4,0.5,23.1,0.5,35.9c0,10.1,3.6,13.3,22.2,25.3c8.6,5.6,16.6,10.3,23.7,14.5\n\tc24.8,14.7,39.8,23.6,39.8,42.5l0,32.4C231.1,455.4,227.5,458.9,223.1,459C223.1,459,223.1,459,223.1,459z\"></path>\n<path d=\"M136.2,146.9h-43c-4.4,0-8-3.6-8-8s3.6-8,8-8h43c4.4,0,8,3.6,8,8S140.6,146.9,136.2,146.9z M142.2,108.3c0-4.4-3.6-8-8-8\n\tH33.1c-4.4,0-8,3.6-8,8s3.6,8,8,8h101.1C138.6,116.3,142.2,112.7,142.2,108.3z M432.5,427.9c0-4.4-3.6-8-8-8h-43c-4.4,0-8,3.6-8,8\n\ts3.6,8,8,8h43C428.9,435.9,432.5,432.4,432.5,427.9z M492.5,458.6c0-4.4-3.6-8-8-8H383.4c-4.4,0-8,3.6-8,8s3.6,8,8,8h101.1\n\tC488.9,466.6,492.5,463,492.5,458.6z\"></path>\n<g>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M488.5,101.3l-60.9-60.9h60.9V101.3z M28.3,421.2h21.8v-43.6H28.3V421.2z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M28.3,445.2h21.8v43.6H28.3V445.2z\"></path>\n</g>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/kiss.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg \nversion=\"1.1\" \nid=\"kiss\" \nclass=\"svg-icon card\" \nxmlns=\"http://www.w3.org/2000/svg\" \nxmlns:xlink=\"http://www.w3.org/1999/xlink\" \nx=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" \nenable-background=\"new 0 0 512 512\" \nxml:space=\"preserve\"\n\ndata-aos=\"zoom-out\"\ndata-aos-offset=\"50\"\ndata-aos-easing=\"ease-in\"\n\n>\n<g>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M68.7,388.8H33.4v-22.5h35.2V388.8z M33.4,457.8v22.5h77.3v-22.5H33.4z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M152.7,35.1L32.2,155.5V35.1H152.7z M33.4,342.7h35.2v-21.6H33.4V342.7z M33.4,434.1h77.3v-21.6H33.4V434.1\n\t\tz\"></path>\n</g>\n<path d=\"M302.1,425c0,4.4-3.6,8-8,8h-43c-4.4,0-8-3.6-8-8s3.6-8,8-8h43C298.6,417,302.1,420.6,302.1,425z M234.7,451.6h-59.3\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8h59.3c4.4,0,8-3.6,8-8S239.1,451.6,234.7,451.6z M487.5,70.9h-15.8V55.2c0-4.4-3.6-8-8-8s-8,3.6-8,8\n\tv15.8H440c-4.4,0-8,3.6-8,8s3.6,8,8,8h15.8v15.8c0,4.4,3.6,8,8,8s8-3.6,8-8V86.9h15.8c4.4,0,8-3.6,8-8S491.9,70.9,487.5,70.9z\n\t M447.7,434.3c-4.4,0-8,3.6-8,8c0,5.7-4.7,10.4-10.4,10.4s-10.4-4.7-10.4-10.4c0-4.4-3.6-8-8-8s-8,3.6-8,8\n\tc0,14.6,11.8,26.4,26.4,26.4s26.4-11.8,26.4-26.4C455.7,437.9,452.1,434.3,447.7,434.3z\"></path>\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"277.8172\" y1=\"381.339\" x2=\"277.8172\" y2=\"141.8442\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M372.2,210.5c-8.1-11.8-16.5-24-25.7-35.3c-7.9-9.5-10.9-9.5-15-9.5c-4.8,0-9.3,1.5-16.8,4.1\n\tc-9.6,3.3-21.5,7.4-36.7,7.4s-27.2-4.1-36.7-7.4c-7.5-2.6-12-4.1-16.8-4.1c-4.2,0-7.2,0-15,9.5c-9.2,11.2-17.6,23.4-25.7,35.3\n\tc-19.1,27.8-37.3,54.3-64.5,61.1c18.1,22.9,42,48.1,52.2,58.2c23.8,23.8,42.6,42.6,106.7,42.6c64.1,0,82.9-18.8,106.7-42.6\n\tc10.1-10.1,34.1-35.4,52.2-58.2C409.5,264.9,391.3,238.4,372.2,210.5z M405.9,279.7c0.7-0.1,1.4-0.2,2.2-0.2\n\tC407.3,279.5,406.6,279.6,405.9,279.7z\"></path>\n<path d=\"M97.2,227.4c0-4.4,3.6-8,8-8c0.1,0,3.7-0.1,12.8-10.7c6.6-7.8,13.9-18.4,21-28.7c8.4-12.2,17.8-26,28.6-39\n\tc16.6-20.2,34.1-29.2,56.7-29.2c14.1,0,25.4,3.9,34.4,7c7.3,2.5,13,4.5,19.2,4.5s11.9-2,19.2-4.5c9-3.1,20.3-7,34.4-7\n\tc22.6,0,40.1,9,56.7,29.2c10.6,12.9,20,26.6,28.3,38.7l0.2,0.3c7.1,10.3,14.4,21,21,28.7c9.1,10.6,12.7,10.7,12.8,10.7\n\tc4.4,0,8,3.6,8,8s-3.6,8-8,8c-14.2,0-27.2-17.5-47-46.3l-0.3-0.4c-8.1-11.8-17.3-25.2-27.5-37.6c-13.7-16.6-26.5-23.4-44.3-23.4\n\tc-11.4,0-20.5,3.1-29.2,6.1c-8,2.8-15.5,5.4-24.4,5.4s-16.4-2.6-24.4-5.4c-8.7-3-17.8-6.1-29.2-6.1c-17.8,0-30.7,6.8-44.3,23.4\n\tc-10.3,12.5-19.6,26-27.7,37.9c-19.8,28.8-32.8,46.4-47,46.4C100.7,235.4,97.2,231.9,97.2,227.4z M501.3,222.7\n\tc-3.1-3.1-8.2-3.1-11.3,0c-1,1-2,2-3.2,3.1c-34.4,33.7-60.7,46.8-93.8,46.8c-29.7,0-54.4-9.3-80.3-30.2c-2.5-2-5.9-2.3-8.8-0.8\n\tc-9.8,5.2-19,8-26.1,8c-7,0-16.3-2.9-26.1-8c-2.8-1.5-6.3-1.2-8.8,0.8c-25.8,20.9-50.6,30.2-80.3,30.2c-33.1,0-59.4-13.1-93.8-46.8\n\tc-3.2-3.1-8.2-3-11.3,0.1c-3.1,3.2-3,8.2,0.1,11.3c37.3,36.5,67.7,51.3,105,51.3c31.5,0,59.1-9.7,86.3-30.5\n\tc8.1,3.8,18.7,7.5,28.9,7.5c10.2,0,20.7-3.7,28.9-7.5c27.2,20.8,54.7,30.5,86.3,30.5c37.3,0,67.7-14.9,105-51.3\n\tc1.2-1.1,2.3-2.2,3.3-3.3C504.4,230.8,504.4,225.8,501.3,222.7z M378.9,324.2c-23.4,23.4-40.2,40.2-101.1,40.2\n\tc-60.8,0-77.7-16.9-101.1-40.2c-3.1-3.1-8.2-3.1-11.3,0c-3.1,3.1-3.1,8.2,0,11.3c24.1,24.1,44.9,44.9,112.4,44.9\n\tc67.5,0,88.3-20.8,112.4-44.9c3.1-3.1,3.1-8.2,0-11.3C387.1,321.1,382,321.1,378.9,324.2z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/lib.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.0\" x=\"0px\" y=\"0px\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title>Icon SVG Symbol Library</title>\n    \n<symbol id=\"icon\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill=\"var(--color-secondary)\" d=\"m370 85.2l-45.1 55.4c-7.4 9.1-6 22.5 3.1 29.9l14.8 12c9.1 7.4 10.5 20.8 3.1 29.9l-125 153.1c-7.9 9.7-22.5 10.5-31.4 1.6l-81.5-81.4c-8.3-8.3-21.7-8.3-30 0l-15 15 128.9 128.7c8.9 8.9 23.6 8.1 31.5-1.7l224.5-278c0.5-0.6 0.4-1.4-0.2-1.9l-77.7-62.6z\"/>\n    <path fill=\"var(--color-black)\" d=\"m208.5 454.1c-2.1 0-4.1-0.8-5.7-2.3l-145.5-145.4c-1.5-1.5-2.3-3.5-2.3-5.7 0-2.1 0.8-4.2 2.3-5.7l23.8-23.8c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-18.1 18.1 133.6 133.4 229.6-284.2-48.7-39.3c-3.4-2.8-4-7.8-1.2-11.3 2.8-3.4 7.8-4 11.3-1.2l54.9 44.3c1.7 1.3 2.7 3.3 2.9 5.4s-0.4 4.2-1.7 5.9l-240.2 297.5c-1.4 1.8-3.5 2.8-5.8 3h-0.5zm-8.2-151c-2.1 0-4.1-0.8-5.7-2.3l-60.3-60.2-18.2 18.2c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l23.9-23.9c3.1-3.1 8.2-3.1 11.3 0l59.7 59.6 164-202.9c2.8-3.4 7.8-4 11.3-1.2 3.4 2.8 4 7.8 1.2 11.3l-169.6 209.7c-1.4 1.8-3.5 2.8-5.8 3h-0.5z\"/>\n    <path fill=\"var(--color-black)\" d=\"m118.5 435.6c0 4.4-3.6 8-8 8h-65c-4.4 0-8-3.6-8-8s3.6-8 8-8h65c4.4 0 8 3.6 8 8zm-3-161c0-4.4-3.6-8-8-8h-86.9c-4.4 0-8 3.6-8 8s3.6 8 8 8h86.8c4.5 0 8.1-3.5 8.1-8zm57.5-230.2c0 5-4.1 9-9 9s-9-4.1-9-9 4.1-9 9-9 9 4 9 9zm30 0c0 5-4.1 9-9 9s-9-4.1-9-9 4.1-9 9-9 9 4 9 9zm11.9 0c0-5 4.1-9 9-9s9 4.1 9 9-4.1 9-9 9-9-4-9-9zm-81.9-8h-87.5c-4.4 0-8 3.6-8 8v177.6c0 4.4 3.6 8 8 8s8-3.6 8-8v-169.6h79.5c4.4 0 8-3.6 8-8s-3.6-8-8-8zm120.4 16h87.6c4.4 0 8-3.6 8-8s-3.6-8-8-8h-87.6c-4.4 0-8 3.6-8 8s3.6 8 8 8zm234 415.2h-262.4c-4.4 0-8 3.6-8 8s3.6 8 8 8h262.4c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0-40h-195.8c-4.4 0-8 3.6-8 8s3.6 8 8 8h195.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-154.4-32c0 4.4 3.6 8 8 8h146.4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-146.4c-4.5 0-8 3.6-8 8z\"/><g>\n    <path fill=\"var(--color-tertiary)\" d=\"m87.5 99.8c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2 15.2 6.8 15.2 15.2-6.8 15.2-15.2 15.2zm65.2-15.2c0-8.4-6.8-15.2-15.2-15.2s-15.2 6.8-15.2 15.2 6.8 15.2 15.2 15.2 15.2-6.8 15.2-15.2zm50 0c0-8.4-6.8-15.2-15.2-15.2s-15.2 6.8-15.2 15.2 6.8 15.2 15.2 15.2 15.2-6.8 15.2-15.2zm-50 50c0-8.4-6.8-15.2-15.2-15.2s-15.2 6.8-15.2 15.2 6.8 15.2 15.2 15.2 15.2-6.8 15.2-15.2zm-50 0c0-8.4-6.8-15.2-15.2-15.2s-15.2 6.8-15.2 15.2 6.8 15.2 15.2 15.2 15.2-6.8 15.2-15.2zm0 50c0-8.4-6.8-15.2-15.2-15.2s-15.2 6.8-15.2 15.2 6.8 15.2 15.2 15.2 15.2-6.8 15.2-15.2z\"/>\n    <path fill=\"var(--color-black)\" d=\"M487.4,235.2v125.1H362.3L487.4,235.2z\"/></g>\n</symbol>\n\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/medicine.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"medicine\" class=\"svg-icon card\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"196.8554\" y1=\"389.0421\" x2=\"196.8554\" y2=\"105.0139\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M308.4,277.6v45.4l-70,40.6l-17.8,23.3H102.9c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6\n\th110.9c15,0,27.2-12.2,27.2-27.2v-19.7c0-25.3,20.5-45.8,45.8-45.8h3C300.1,259,308.4,267.3,308.4,277.6z M260,168.4h19.3v-66H260\n\tc-13.6,0-24.7,11-24.7,24.7v16.7C235.3,157.3,246.4,168.4,260,168.4z\"></path>\n<path d=\"M239.4,321.7c0,4.4-3.6,8-8,8h-27.7v27.7c0,4.4-3.6,8-8,8s-8-3.6-8-8v-27.7H158c-4.4,0-8-3.6-8-8s3.6-8,8-8h29.7v-28\n\tc0-4.4,3.6-8,8-8s8,3.6,8,8v28h27.7C235.8,313.7,239.4,317.3,239.4,321.7z M408.5,398.5L312,455.3c-9.9,5.7-20.8,8.6-31.9,8.6\n\tc-5.4,0-10.8-0.7-16.1-2.1c-14.8-3.9-27.5-12.7-36.2-25.1H120.2c-23.6,0-42.8-19.2-42.8-42.8v-135c0-9.2,3-18.3,8.6-25.7l33.3-44.3\n\tv-12.1c-8.5-5.2-13.9-14.5-13.9-24.7V120c0-15.9,13-28.9,28.9-28.9h125.4c15.9,0,28.9,13,28.9,28.9v32.1c0,10.2-5.4,19.6-13.9,24.7\n\tv12.1l33.2,44.3c4.7,6.3,7.6,13.8,8.4,21.6c0.1,0.6,0.2,1.2,0.2,1.8c0,0.2,0,0.5,0,0.7c0,0.5,0,1.1,0,1.6v47.4l28-18\n\tc0.1-0.1,0.2-0.1,0.3-0.2c14.8-8.5,31.9-10.8,48.4-6.4c16.4,4.4,30.2,15,38.7,29.7C449.4,341.9,438.9,380.9,408.5,398.5z\n\t M121.2,152.1c0,5.4,3.3,10.2,8.3,12.1h134.6c5-1.9,8.3-6.7,8.3-12.1V120c0-7.1-5.8-12.9-12.9-12.9H134.1c-7.1,0-12.9,5.8-12.9,12.9\n\tV152.1z M220.5,420.7c-2.9-9-4.3-17.7-4-25.9H93.4c0.5,14.4,12.3,25.9,26.8,25.9H220.5z M244,349.5l54.7-31.8l1.7-1.1v-52H113.3\n\tc-4.4,0-8-3.6-8-8s3.6-8,8-8h185c-0.9-2.1-2-4-3.3-5.8l-25.5-34h-79.6c-4.4,0-8-3.6-8-8s3.6-8,8-8h68.8c-0.1-0.4-0.1-0.9-0.1-1.3\n\tv-11.4H135.2v11.4c0,1.7-0.6,3.4-1.6,4.8l-34.8,46.5c-3.5,4.6-5.4,10.3-5.4,16.1v119.9h126C223.4,366.6,231.9,356.5,244,349.5z\n\t M418,319.4c-6.4-11.1-16.7-19-29-22.3c-12.3-3.3-25.1-1.6-36.1,4.7l-39.3,25.2l38.2,66.1c2.2,3.8,0.9,8.7-2.9,10.9\n\tc-3.8,2.2-8.7,0.9-10.9-2.9l-38-65.8l-47.9,27.9c-20.5,11.8-25.1,34.3-12.8,61.7c13.4,22,42.3,29.4,64.6,16.5l96.5-56.8\n\tC423.3,371.5,431.1,342.2,418,319.4z\"></path>\n<path d=\"M68.2,168.4c0,5.9-4.8,10.8-10.8,10.8c-5.9,0-10.8-4.8-10.8-10.8s4.8-10.8,10.8-10.8C63.4,157.6,68.2,162.4,68.2,168.4z\n\t M477.1,437.3h-15.8v-15.8c0-4.4-3.6-8-8-8s-8,3.6-8,8v15.8h-15.8c-4.4,0-8,3.6-8,8s3.6,8,8,8h15.8v15.8c0,4.4,3.6,8,8,8s8-3.6,8-8\n\tv-15.8h15.8c4.4,0,8-3.6,8-8S481.5,437.3,477.1,437.3z M345.4,141.1c-4.4,0-8,3.6-8,8c0,11.4-9.3,20.8-20.8,20.8c-4.4,0-8,3.6-8,8\n\ts3.6,8,8,8c20.3,0,36.8-16.5,36.8-36.8C353.4,144.7,349.8,141.1,345.4,141.1z M395.4,169.9c-11.4,0-20.8-9.3-20.8-20.8\n\tc0-4.4-3.6-8-8-8s-8,3.6-8,8c0,20.3,16.5,36.8,36.8,36.8c4.4,0,8-3.6,8-8S399.8,169.9,395.4,169.9z M395.4,191.1\n\tc-20.3,0-36.8,16.5-36.8,36.8c0,4.4,3.6,8,8,8s8-3.6,8-8c0-11.4,9.3-20.8,20.8-20.8c4.4,0,8-3.6,8-8S399.8,191.1,395.4,191.1z\n\t M316.7,191.1c-4.4,0-8,3.6-8,8s3.6,8,8,8c11.4,0,20.8,9.3,20.8,20.8c0,4.4,3.6,8,8,8s8-3.6,8-8\n\tC353.4,207.6,336.9,191.1,316.7,191.1z M58.6,457.4h-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8s3.6,8,8,8h3.9\n\tv3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9c4.4,0,8-3.6,8-8S63,457.4,58.6,457.4z M427.8,79.7h3.9v3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9\n\th3.9c4.4,0,8-3.6,8-8s-3.6-8-8-8h-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8S423.4,79.7,427.8,79.7z\n\t M378.1,44.1c0-4.4-3.6-8-8-8h-113c-4.4,0-8,3.6-8,8s3.6,8,8,8h113C374.5,52.1,378.1,48.5,378.1,44.1z\"></path>\n<g>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M97,40.5v21.8H40.1V40.5H97z\"></path>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M486.5,256.6h-21.8v-94.2h21.8V256.6z\"></path>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M486.5,334.7h-21.8v-56.9h21.8V334.7z\"></path>\n</g>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/red_eye.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"red_eye\" class=\"svg-icon card\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"260.4795\" y1=\"363.3798\" x2=\"280.4398\" y2=\"106.7461\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M364.8,245.2c0,52.6-42.6,95.2-95.2,95.2s-95.2-42.6-95.2-95.2s42.6-95.2,95.2-95.2\n\tS364.8,192.6,364.8,245.2z\"></path>\n<path fill=\"#000000\" d=\"M495.5,287.1c0,4.4-3.6,8-8,8h-43c-4.4,0-8-3.6-8-8s3.6-8,8-8h43C492,279.1,495.5,282.6,495.5,287.1z\n\t M466.1,309.1h-73.8c-4.4,0-8,3.6-8,8s3.6,8,8,8h73.8c4.4,0,8-3.6,8-8S470.5,309.1,466.1,309.1z M436.1,69.6h15.8v15.8\n\tc0,4.4,3.6,8,8,8s8-3.6,8-8V69.6h15.8c4.4,0,8-3.6,8-8s-3.6-8-8-8h-15.8V37.8c0-4.4-3.6-8-8-8s-8,3.6-8,8v15.8h-15.8\n\tc-4.4,0-8,3.6-8,8S431.7,69.6,436.1,69.6z M55,64.6h-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8s3.6,8,8,8h3.9\n\tv3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9H55c4.4,0,8-3.6,8-8S59.4,64.6,55,64.6z M50.3,203.8c-5.9,0-10.8,4.8-10.8,10.8\n\tc0,5.9,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8C61.1,208.6,56.3,203.8,50.3,203.8z M50.3,273.8c-5.9,0-10.8,4.8-10.8,10.8\n\tc0,5.9,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8C61.1,278.6,56.3,273.8,50.3,273.8z M50.3,334.8c-5.9,0-10.8,4.8-10.8,10.8\n\tc0,5.9,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8C61.1,339.6,56.3,334.8,50.3,334.8z\"></path>\n<g>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M45.3,415.2v77.3H23.8v-77.3H45.3z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M458.5,429.8v-34.7h34.7v34.7H458.5z M493.2,482v-34.7h-34.7V482H493.2z M439.9,482v-34.7h-34.7V482H439.9z\n\t\t\"></path>\n</g>\n<path d=\"M259.1,474.1c-4.4,0-8-3.6-8-8v-62.3c0-4.4,3.6-8,8-8h21.1c4.4,0,8,3.6,8,8s-3.6,8-8,8h-13.1v54.3\n\tC267.1,470.5,263.5,474.1,259.1,474.1z M376.7,444.1c-2.7,0-5.4-1.4-6.9-3.9l-28.5-48c-1.1-1.9-1.4-4.2-0.8-6.4s2.1-3.9,4.2-4.9\n\tl19-9.3c4-1.9,8.8-0.3,10.7,3.7s0.3,8.8-3.7,10.7l-11.2,5.5l24.1,40.5c2.3,3.8,1,8.7-2.8,11C379.5,443.8,378.1,444.1,376.7,444.1z\n\t M143.7,434.9c-1.4,0-2.8-0.4-4.1-1.1c-3.8-2.3-5-7.2-2.8-11l28.5-48c2.1-3.6,6.6-4.9,10.4-3.1l19,9.3c4,1.9,5.6,6.7,3.7,10.7\n\tc-1.9,4-6.7,5.6-10.7,3.7l-12.4-6l-24.8,41.7C149,433.5,146.4,434.9,143.7,434.9z M172.2,161.8c-3,0-5.8-1.7-7.2-4.5\n\tc-1.9-4-0.3-8.8,3.7-10.7l11.2-5.5l-24.1-40.5c-2.3-3.8-1-8.7,2.8-11c3.8-2.3,8.7-1,11,2.8l28.5,48c1.1,1.9,1.4,4.2,0.8,6.4\n\tc-0.6,2.1-2.1,3.9-4.2,4.9l-19,9.3C174.6,161.6,173.4,161.8,172.2,161.8z M367.2,161.8c-1.2,0-2.4-0.3-3.5-0.8l-19-9.3\n\tc-4-1.9-5.6-6.7-3.7-10.7c1.9-4,6.7-5.6,10.7-3.7l12.4,6l24.8-41.7c2.3-3.8,7.2-5,11-2.8c3.8,2.3,5,7.2,2.8,11l-28.5,48\n\tC372.6,160.4,369.9,161.8,367.2,161.8z M280.2,136.9h-21.1c-4.4,0-8-3.6-8-8s3.6-8,8-8h13.1V66.6c0-4.4,3.6-8,8-8s8,3.6,8,8v62.3\n\tC288.2,133.3,284.7,136.9,280.2,136.9z M269.7,390.6c-75,0-127.6-43.6-158.5-80.1c-2.9-3.4-2.4-8.4,0.9-11.3\n\tc3.4-2.9,8.4-2.4,11.3,0.9c28.7,34,77.5,74.4,146.3,74.4c47.3,0,90.7-18.8,129-55.9c22.6-21.9,36.6-43.9,41.6-52.4\n\tc-5-8.6-19.2-30.8-41.9-52.8c-37.9-36.5-80.7-55.2-127.4-55.5c-48.5,0.5-87.8,39.8-88.4,88.2c0.6,47.6,39.4,86.1,87.1,86.1\n\tc48.1,0,87.2-39.1,87.2-87.2c0-17-5-33.5-14.4-47.8c-2.4-3.7-1.4-8.7,2.3-11.1c3.7-2.4,8.7-1.4,11.1,2.3c11.1,16.9,17,36.4,17,56.6\n\tc0,56.9-46.3,103.2-103.2,103.2c-55.9,0-101.5-44.7-103.1-100.2c0-0.3,0-0.5,0-0.8c0-0.4,0-0.7,0-1.1c0-0.4,0-0.7,0-1.1\n\tc0-0.3,0-0.5,0-0.8c0.7-26.8,11.5-51.1,28.8-69.3c-19.2,9.2-37.4,22.2-54.6,38.9c-22.6,21.9-36.6,43.9-41.6,52.4\n\tc0.8,1.4,1.8,3.1,3.1,5.1c2.3-3.2,6.6-4.3,10.2-2.4c3.9,2,5.4,6.9,3.4,10.8l-5.7,10.9c-1.3,2.5-3.8,4.1-6.6,4.3\n\tc-2.8,0.2-5.5-1.1-7.1-3.4C87.6,279.1,83,270.4,82.9,270c-1.2-2.3-1.2-5.1,0-7.4c0.6-1.2,16.1-30.6,46.7-60.2\n\tc40.8-39.5,89.3-60.4,140.1-60.4c0.4,0,0.8,0,1.2,0c0.5,0,1,0,1.5,0c49.8,0.7,97.3,21.6,137.4,60.4c30.6,29.6,46.1,59,46.7,60.2\n\tc1.2,2.3,1.2,5.1,0,7.4c-0.6,1.2-16.1,30.6-46.7,60.2C369,369.7,320.5,390.6,269.7,390.6z M269.7,284.9c-21.9,0-39.7-17.8-39.7-39.7\n\ts17.8-39.7,39.7-39.7s39.7,17.8,39.7,39.7S291.6,284.9,269.7,284.9z M269.7,221.5c-13.1,0-23.7,10.6-23.7,23.7s10.6,23.7,23.7,23.7\n\ts23.7-10.6,23.7-23.7S282.8,221.5,269.7,221.5z M259.1,253.2c-4.4,0-8-3.6-8-8c0-10.2,8.3-18.6,18.6-18.6c4.4,0,8,3.6,8,8\n\ts-3.6,8-8,8c-1.4,0-2.6,1.2-2.6,2.6C267.1,249.6,263.5,253.2,259.1,253.2z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/shopping_car.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg version=\"1.1\" id=\"shopping_car\" class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"339.2942\" y1=\"349.164\" x2=\"339.2942\" y2=\"178.1726\" class=\"gradient-element\">\n\t<stop offset=\"0\" class=\"primary-color-gradient\" style=\"stop-color: #0043A4\"></stop>\n\t<stop offset=\"1\" class=\"secondary-color-gradient\" style=\"stop-color: #409700\"></stop>\n</linearGradient>\n<path fill=\"url(#SVGID_1_)\" d=\"M393.4,185.7h82.2l-69,159h-199l-2-5.3c-10.2-27,9.8-55.9,38.7-55.9H290c19.1,0,36.3-11.6,43.6-29.3\n\tl16-39.1C356.8,197.3,374.1,185.7,393.4,185.7z\"></path>\n<path d=\"M183.4,303.1l-50.3-133.5H89.6c-4.4,0-8-3.6-8-8s3.6-8,8-8h49c3.3,0,6.3,2.1,7.5,5.2l54.4,144.3h15c4.4,0,8,3.6,8,8\n\ts-3.6,8-8,8H195c0,0,0,0,0,0c0,0,0,0,0,0h-47.2c-4.4,0-8-3.6-8-8s3.6-8,8-8H183.4z M213.1,352.7l-19.7,50h27.1\n\tc6.7-16.3,22.7-27.8,41.4-27.8s34.7,11.5,41.4,27.8h51c6.7-16.3,22.7-27.8,41.4-27.8c24.7,0,44.7,20.1,44.7,44.7\n\ts-20.1,44.7-44.7,44.7s-44.7-20.1-44.7-44.7c0-0.3,0-0.6,0-0.9h-44.4c0,0.3,0,0.6,0,0.9c0,24.7-20.1,44.7-44.7,44.7\n\ts-44.7-20.1-44.7-44.7c0-0.3,0-0.6,0-0.9h-35.6c-2.6,0-5.1-1.3-6.6-3.5c-1.5-2.2-1.8-5-0.8-7.4l21.7-55.1h-48.1c-4.4,0-8-3.6-8-8\n\ts3.6-8,8-8h253.6l62.1-143H193.8c-4.4,0-8-3.6-8-8s3.6-8,8-8h281.9c2.7,0,5.2,1.4,6.7,3.6c1.5,2.3,1.7,5.1,0.7,7.6l-69,159\n\tc-1.3,2.9-4.2,4.8-7.3,4.8H215.5H213.1z M366.9,419.6c0,15.8,12.9,28.7,28.7,28.7s28.7-12.9,28.7-28.7s-12.9-28.7-28.7-28.7\n\tS366.9,403.8,366.9,419.6z M233.2,419.6c0,15.8,12.9,28.7,28.7,28.7s28.7-12.9,28.7-28.7s-12.9-28.7-28.7-28.7\n\tS233.2,403.8,233.2,419.6z\"></path>\n<g>\n\t<path fill=\"#0043A4\" class=\"primary-color\" d=\"M483.5,103.1v35.8H288.5v-35.8H483.5z\"></path>\n\t<path fill=\"#409700\" class=\"secondary-color\" d=\"M487.7,41.4v39.3H284.3V41.4H487.7z\"></path>\n</g>\n<path d=\"M223.5,80.2c0,4.4-3.6,8-8,8h-67.8c-4.4,0-8-3.6-8-8s3.6-8,8-8h67.8C219.9,72.2,223.5,75.8,223.5,80.2z M166.2,455.2H52.5\n\tc-4.4,0-8,3.6-8,8s3.6,8,8,8h113.7c4.4,0,8-3.6,8-8S170.6,455.2,166.2,455.2z M44.5,264v15.8c0,4.4,3.6,8,8,8s8-3.6,8-8V264h15.8\n\tc4.4,0,8-3.6,8-8s-3.6-8-8-8H60.5v-15.8c0-4.4-3.6-8-8-8s-8,3.6-8,8V248H28.7c-4.4,0-8,3.6-8,8s3.6,8,8,8H44.5z M45.8,76.4h3.9v3.9\n\tc0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9c4.4,0,8-3.6,8-8s-3.6-8-8-8h-3.9v-3.9c0-4.4-3.6-8-8-8s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8\n\tS41.4,76.4,45.8,76.4z M476,343.4c0,5.5-4.4,9.9-9.9,9.9c-5.5,0-9.9-4.4-9.9-9.9c0-5.5,4.4-9.9,9.9-9.9\n\tC471.6,333.5,476,337.9,476,343.4z M46,384.4c0,5.5-4.4,9.9-9.9,9.9s-9.9-4.4-9.9-9.9c0-5.5,4.4-9.9,9.9-9.9S46,379,46,384.4z\"></path>\n</svg>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/js/inline/InlineJS.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = (function() {
var output = "";
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/dropdown.js", false, "static/js/inline/InlineJS.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/drawer.js", false, "static/js/inline/InlineJS.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/navbar.js", false, "static/js/inline/InlineJS.njk", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../repository/accordion.js", false, "static/js/inline/InlineJS.njk", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
})})})});
return output;
})()
;
frame.set("js", t_1, true);
if(frame.topLevel) {
context.setVariable("js", t_1);
}
if(frame.topLevel) {
context.addExport("js", t_1);
}
output += "\n\n<script>\nconsole.log(\"Hello from the Load\");\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("jsmin").call(context, runtime.contextOrFrameLookup(context, frame, "js"))), env.opts.autoescape);
output += "\n</script>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template/card-simple.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"cards");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("card", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<div class=\"\n    card [ \n        sm:items-center - sm:justify-center  \n        lg:items-center - lg:justify-center \n    ]\">\n    <svg>\n        <use href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"iconPath"), env.opts.autoescape);
output += "\"></use>\n    </svg>\n    <h3>\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "\n    </h3>            \n    <p>\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"description"), env.opts.autoescape);
output += "\n    </p>\n</div>";
;
}
}
frame = frame.pop();
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["template/introduction.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"introductions");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("introduction", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<div class=\"introduction\">\n    <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"src"), env.opts.autoescape);
output += "\" alt=\"Image Alt\" title=\"Image Title\"/>\n    <h3>\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "\n    </h3>\n    <p>\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"description"), env.opts.autoescape);
output += "\n    </p>\n</div>";
;
}
}
frame = frame.pop();
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

