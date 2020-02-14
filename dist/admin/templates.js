(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["content/homepage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<section>\n    <div class=\"grid columns-2\">\n        <div class=\"divText\">\n            <h1>\n                11ty Started\n            </h1>\n            <p>\n                Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n            </p>\n        </div>\n        <div class=\"divImage\">\n            <img src=\"/_includes/static/images/image.png\" alt=\"Dummy Image\" title=\"Dummy Image\" >\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"grid columns-3\">\n        <div class=\"divCard card\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/icons/check_1.svg", false, "content/homepage.njk", false, function(t_2,t_1) {
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
output += "\n            <p>\n                ver the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n            </p>\n        </div>\n        <div class=\"divCard card\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/icons/check_1.svg", false, "content/homepage.njk", false, function(t_6,t_5) {
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
output += "\n            <p>\n                ver the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n            </p>\n        </div>\n        <div class=\"divCard card\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/icons/check_1.svg", false, "content/homepage.njk", false, function(t_10,t_9) {
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
output += "\n            <p>\n                ver the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n            </p>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"grid columns-2\">\n        <div class=\"divAccordion\">\n             ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/accordion/accordion.njk", false, "content/homepage.njk", false, function(t_14,t_13) {
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
output += "\n        </div>\n        <div class=\"divDropdown\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/dropdown/dropdown.njk", false, "content/homepage.njk", false, function(t_18,t_17) {
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
output += "\n            <div class=\"card__mail-bar\"></div>\n            <div class=\"card__mail-container\">\n                <h3> Newslatters</h3>\n                <form \n                    id=\"card__mail-subs-netliId-59\" \n                    name=\"card__mail-subs-netliId-59\" \n                    method=\"POST\" \n                    data-netlify=\"true\"\n                    class=\"card__mail-form\" \n                    >\n                    <div class=\"card__mail-field\">\n                        <label for=\"netliId-59-email\">E-MAIL</label>\n                        <div class=\"field-group\">\n                            <svg> <use href=\"/_assets/media/svg/sprites.svg#mail\"></use></svg>\n                            <input type=\"email\" id=\"netliId-59-email\" name=\"netliId-59-email\" placeholder=\"jhondue@mail.com\" aria-label=\"email\" required/>\n                        </div>\n                    </div>\n                    <el-button class=\"auto\">\n                        <button type=\"submit\" slot=\"button\" class=\"el-btn\">\n                            SUBSCRIBRE \n                        </button>\n                    </el-button>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section>\n    <div class=\"grid columns-1 max-width-1024\">\n        <div class=\"DIV\">\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "content/homepage.njk", false, function(t_22,t_21) {
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
output += "\n        </div>\n    </div>\n</section>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
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
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n<!-- include head | Block head -->\n";
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
output += "\n<body>\n<!-- include drawer | Block nav-->\n";
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
output += "\n<!-- Block page -->\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += t_15;
output += "\n<!-- include footer | Block footer -->\n";
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
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
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
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/banner/base.njk", false, "page/about.njk", false, function(t_7,t_6) {
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
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n    \n    </main>\n";
cb(null, output);
});
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
env.getTemplate("partials/banner/base.njk", false, "page/base.njk", false, function(t_12,t_11) {
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
output += "\n";
var t_4;
t_4 = "All posts";
frame.set("postListHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_4);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_4);
}
output += "\n";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_5, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_5);
}
if(frame.topLevel) {
context.addExport("postListItems", t_5);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
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
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/banner/base.njk", false, "page/blog.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
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
env.getTemplate("partials/components/post-list.njk", false, "page/blog.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
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
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
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
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/banner/base.njk", false, "page/contact.njk", false, function(t_7,t_6) {
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
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/form/form.njk", false, "page/contact.njk", false, function(t_11,t_10) {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["page/homepage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
env.getTemplate("layouts/base.njk", true, "page/homepage.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
var t_4;
t_4 = "All posts";
frame.set("postListHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_4);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_4);
}
output += "\n";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_5, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_5);
}
if(frame.topLevel) {
context.addExport("postListItems", t_5);
}
output += "\n";
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
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
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n    ";
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/banner/base.njk", false, "page/homepage.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
output += "\n    <main id=\"main-content\" tabindex=\"-1\">\n        ";
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("content/homepage.njk", false, "page/homepage.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
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
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "page/page.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
});
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
output += "\n<p class=\"[ intro__meta ] [ text-500 leading-tight ]\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 9, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
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
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ] grid max-width-768\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "page/post.njk", false, function(t_10,t_9) {
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
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <hr />\n        <aside class=\"[ post__body ] [ inner-wrapper ] [ pad-bottom-900 text-500 ]\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "page/post.njk", false, function(t_14,t_13) {
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
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"[ post__footer ] [ pad-top-500 pad-bottom-500 ]\">\n          <div class=\"inner-wrapper\">\n            <div class=\"[ nav ] [ box-flex align-center ]\">\n              <h2 class=\"font-base text-600 weight-mid\">Filed under</h2>\n              <ul class=\"[ nav__list ] [ box-flex align-center pad-left-400 ] [ p-category ]\">\n                ";
frame = frame.push();
var t_19 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("item", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\n                  <li class=\"nav__item\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_20, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_20, env.opts.autoescape);
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
});
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/banner/base.njk"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/banner/homepage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header role=\"banner\" class=\"banner homepage-banner__background\">\n\n  ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "\n  \n</header>";
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
output += "<!-- footer -->\n<footer id=\"footer\">\n    <div class=\"grid\"></div>\n    <div class=\"footer__copyright\">\n        <p> © <span id=\"currentYear\"></span> Copyright ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += ". All Rights Reserved</p>\n    </div>\n</footer>\n\n<!-- include LoadJS -->\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/js/LoadJS.njk", false, "partials/footer/footer.njk", false, function(t_2,t_1) {
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
output += "\n\n<!-- jsPath -->\n<script src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "jsPath"), env.opts.autoescape);
output += "\"  type=\"text/javascript\" ></script>\n\n<!-- serviceWorker -->\n<script>\nif ('serviceWorker' in navigator) {\n    window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/service-worker.js');\n    });\n}\n</script>\n\n<!-- netlify-identity -->\n<script src=\"https://identity.netlify.com/v1/netlify-identity-widget.js\" async defer></script>\n\n";
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
output += "\" type=\"image/png\" />\n\n  <!-- link page csss -->\n  <link rel=\"stylesheet\" type=\"text/css\"  href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cssPath"), env.opts.autoescape);
output += "\" />\n\n  <!-- include critical css -->\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("static/css/LoadCSS.njk", false, "partials/head/head.njk", false, function(t_6,t_5) {
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
output += "\n\n  <!-- no-js -->\n  <script>document.documentElement.classList.remove('no-js');</script>\n\n</head>";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/LoadCSS.njk"] = (function() {
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
env.getTemplate("./ui/font.css", false, "static/css/LoadCSS.njk", false, function(t_2,t_1) {
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
env.getTemplate("./ui//drawer.css", false, "static/css/LoadCSS.njk", false, function(t_6,t_5) {
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
env.getTemplate("./ui/navbar.css", false, "static/css/LoadCSS.njk", false, function(t_10,t_9) {
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
env.getTemplate("./ui/banner.css", false, "static/css/LoadCSS.njk", false, function(t_14,t_13) {
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
env.getTemplate("./ui/grid.css", false, "static/css/LoadCSS.njk", false, function(t_18,t_17) {
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
env.getTemplate("./ui/button.css", false, "static/css/LoadCSS.njk", false, function(t_22,t_21) {
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
env.getTemplate("./ui/accordion.css", false, "static/css/LoadCSS.njk", false, function(t_26,t_25) {
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
env.getTemplate("./ui/dropdown.css", false, "static/css/LoadCSS.njk", false, function(t_30,t_29) {
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
env.getTemplate("./ui/footer.css", false, "static/css/LoadCSS.njk", false, function(t_34,t_33) {
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
env.getTemplate("./ui/color.css", false, "static/css/LoadCSS.njk", false, function(t_38,t_37) {
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
env.getTemplate("./ui//card.css", false, "static/css/LoadCSS.njk", false, function(t_42,t_41) {
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
env.getTemplate("./stylesheet.css", false, "static/css/LoadCSS.njk", false, function(t_46,t_45) {
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
output += "\n</style>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})});
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
output += "@import '/theme.css'";
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
output += "*,\n*::after,\n*::before {\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box\n}\n\nhtml {\n\toverflow-x: hidden;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-text-size-adjust: 100%;\n\t-ms-text-size-adjust: 100%;\n\ttext-rendering: optimizeLegibility;\n\tline-height: 1.6;\n\tfont-size: 19px;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Open Sans\", \"Archivo Black\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\t--color-box-shadow: 0px 1px 2px 0px #99a3ad, 0px 0px 2px rgba(0, 0, 0, 0.72);\n\t--color-primary: #0e0e0e;\n\t--color-secondary: #002fff;\n\t--color-tertiary: #305900;\n\t--color-quaternary: #00337d;\n\t--color-white: white;\n\t--color-black: black;\n\t--color-cat: #1d1300;\n\t--page-maxwidth: 1468px;\n}\n\nbody {\n\tfont-family: \"Open Sans\";\n\tmargin: 0;\n}\n\n\nh1,\nh3,\nh2 {\n\tfont-family: \"Archivo Black\";\n}\n\n\nh2 {\n\tfont-size: 2rem;\n\t/* font-weight: 600; */\n\tcolor: #000;\n\tfont-family: \"Archivo Black\";\n\tgrid-column: 1 / -1;\n\ttext-align: center\n}\n\nimg {\n\tdisplay: block;\n\theight: auto;\n\tmax-width: 100%;\n}\n\na {\n\ttext-decoration: none;\n}\n\nul {\n\tlist-style: none;\n\tmargin: 0;\n}\n\n\n.divImage img {\n\twidth: 100%;\n\theight: 400px;\n}\n\n.divCard svg {\n\twidth: 100px;\n\theight: 100px;\n}\n\n/* .divCard {\n\tpadding: 1rem;\n\tbox-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);\n} */";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/accordion.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".divAccordion {\n  min-height: 400px;\n\n}\n.accordion {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);\n  }\n  \n  .active, .accordion:hover {\n    background-color: #ccc;\n  }\n  \n  .accordion:after {\n    content: '\\002B';\n    color: #777;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n  }\n  \n  .active:after {\n    content: \"\\2212\";\n  }\n  \n  .panel {\n    padding: 0 18px;\n    background-color: white;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n  }";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/banner.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".banner {\n\tdisplay: grid;\n\tplace-items: center;\n\tmin-height: 400px;\n\theight: 65vh;\n\tbackground: var(--color-primary);\n\n}\n\n.banner_base-background {\n\tbackground: var(--color-primary);\n\n}\n\n.banner_base-title {\n\tcolor: var(--color-white);\n}";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/button.css"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/card.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".card {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem 0;\n    box-shadow: rgba(46, 41, 51, 0.4) 0px 1px 2px, rgba(71, 63, 79, 0.489) 0px 2px 4px;\n    background-color: #ffffff;\n    margin-bottom: 1.5rem;\n    margin-left: 0rem;\n    margin-right: 0rem;\n    padding: 2rem;\n    border-radius: 4px;\n    border-width: 0px;\n    border-style: initial;\n    border-color: initial;\n    border-image: initial;\n    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n\n.card:hover {\n    transform: translateY(-0.18rem);\n    box-shadow: rgba(0, 0, 0, 0.448) 0px 3px 6px, rgba(0, 0, 0, 0.496) 0px 6px 12px;\n}\n\n\n.card__mail-bar {\n\theight: 12px;\n\twidth: 100%;\n\tbackground: var(--theme-ui-colors-newsletter-background,#ffffff) repeating-linear-gradient( 135deg,var(--theme-ui-colors-newsletter-stripeColorA,#ff5a54),var(--theme-ui-colors-newsletter-stripeColorA,#ff5a54) 20px,#0000 20px,#0000 40px,var(--theme-ui-colors-newsletter-stripeColorB,#3fa9f5) 40px,var(--theme-ui-colors-newsletter-stripeColorB,#3fa9f5) 60px,#0000 60px,#0000 80px );\n}\n\n.card__mail-container {\n\tbackground: #fafafa !important\n}\n\n.card__mail-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmin-height: 200px;\n}\n\n.card__mail-field {\n\twidth: 100%;\n\tborder: 1px solid var(--color-light);\n\tbackground: white;\n}";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/color.css"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/drawer.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "#drawer {\n\tbackground: var(--color-primary);\n\theight: 100%;\n\twidth: 0;\n\tmax-width: 100%;\n\tposition: fixed;\n\tz-index: 10;\n\ttop: 0;\n\tleft: 0;\n\toverflow-x: hidden;\n\t-webkit-transition: all ease-in-out 300ms;\n\ttransition: all ease-in-out 300ms;\n}\n\n.drawer__header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 1rem 0rem;\n\tmax-width: 95%;\n\twidth: 100%;\n\tmargin: auto;\n\n}\n\n\n[id*='drawer__button-'] {\n\tdisplay: none;\n\tz-index: 10;\n\tpadding: 0.8rem;\n\tmin-width: 40px;\n\theight: auto;\n\tcursor: pointer;\n\t-ms-touch-action: auto;\n\ttouch-action: auto;\n\tbackground: transparent;\n\tborder: 0;\n\t-webkit-animation-name: fadeIn;\n\t-webkit-animation-duration: 0.5s;\n\tanimation-name: fadeIn;\n\tanimation-duration: 0.5s;\n}\n\n@media(max-width: 768px) {\n\t[id*='drawer__button-']{\n\t\tdisplay: block;\n\t}\n}\n\n[id*='drawer__button-'] svg {\n\tfill:var(--color-white);\n}\n\n.drawer__brand {\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tmax-width: 6rem;\n\tcolor: var(--color-white);\n\t-webkit-animation-name: fadeIn;\n\t-webkit-animation-duration: 0.5s;\n\tanimation-name: fadeIn;\n\tanimation-duration: 0.5s;\n}\n\n\n\n.drawer__menu {\n\tdisplay: flex;\n\twidth: auto;\n}\n\n.drawer__menu-list {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\tmargin: auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n}\n\n.drawer__menu-item{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tcursor: pointer;\n\twidth: 100%;\n\tpadding: 0.5rem;\n\tmargin: 0.5rem 0;\n\n}\n\n.drawer__menu-item:hover{\n\tbackground: #353535dd;\n}\n\n\n.drawer__menu-item a {\n\tcolor: #fff;\n\tmax-width: 95%;\n\twidth: 100%;\n\tmargin: auto;\n}\n\nhr {\n\tdisplay: block;\n\twidth: 100%;\n\tborder: 0px solid #e8e8e8;\n}\n\n\n#drawer__backdrop {\n\tposition: fixed;\n\theight: 100vh;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tdisplay: none;\n\tbackground: rgba(0, 0, 0, 0.72);\n\tz-index: 10;\n\tcursor: not-allowed;\n}\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/dropdown.css"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/font.css"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/footer.css"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/form.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n#form-holder {\n    width: 100%;\n    max-width: 768px;\n    height: 50vh;\n    min-height: 768px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n/* form */\n.form {\n    width: 100%;\n}\n\n/* field */\n.field {\n    display: grid;\n    grid-gap: 1rem;\n    width: 100%;\n    max-width: 768px;\n    margin: auto;\n}\n\n.field_x1 {\n    grid-template-columns: 1fr;\n}\n\n.field_x2 {\n    grid-template-columns: 1fr 1fr;\n}\n\n.field_x3 {\n    grid-template-columns: 1fr 1fr 3fr;\n}\n\n[id*=\"field_\"] {\n    display: none\n}\n\n#field_1 {\n    display: grid;\n}\n\n/* field_inquiry */\n.field_inquiry {\n    grid-column: 1 / -1;\n    color: #000;\n    font-size: 2.2em;\n    min-height: 100px;\n    text-align: center;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem 0;\n}\n/* field_label */\n.field_label {\n    color:#000;\n    /* min-height: 200px; */\n    padding: 1rem;\n}\n\n/* field_number */\n.field_number input[type=\"number\"] {\n    cursor: text;\n    color: #000 !important;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    width: 100%;\n    border-radius: 2px;\n}\n\n/* field_text */\n.field_text input[type=\"text\"] {\n    cursor: text;\n    color: #000 !important;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    width: 100%;\n    border-radius: 2px;\n}\n\n/* button radio */\n.field_radios input[type=\"radio\"] {\n    opacity: 0;\n    position: fixed;\n    width: 0;\n}\n\n.field_radios label {\n    display: inline-grid;\n    place-items: center;\n    background: var(--color-white);\n    /* color: #fff; */\n    padding: 10px 20px;\n    font-family: sans-serif, Arial;\n    font-size: 1.6rem;\n    font-weight: 600;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    width: 100%;\n    min-height: 300px;\n}\n\n.field_radios label:active {\n    box-shadow: 0 2px #aaaaaa;\n    transform: translateY(4px);\n}\n\n.field_radios input[type=\"radio\"]:checked+label {\n    background-color: rgb(4, 49, 65);\n}\n\n.field_radios input[type=\"radio\"]:focus+label {\n    border: 2px dashed #ddd;\n}\n\n\n\n/* button field */\n.field button {\n    width: 100%;\n    padding: 1rem;\n    color: #fff;\n    background: var(--color-primary);\n    grid-column: 1 / -1;\n    outline: none;\n    border: none;\n    font-family: sans-serif, Arial;\n    font-size: 1.6rem;\n    font-weight: 600;\n}\n\n.field button:active {\n    box-shadow: 0 2px #aaaaaa;\n    transform: translateY(4px);\n}\n\n/* button submit */\n.field_submit button {\n    cursor: pointer;\n    border-radius: 4px;\n    color: #000;\n    background: var(--color-primary);\n}\n\n/* hidden */\n.field_label-hidden {\n    display: none;\n    visibility: hidden;\n}\n\n/* input */\ninput {\n    border: 1px solid #ddd !important;\n}\n\ninput:invalid {\n    background: #fff3f3ba !important;\n}\n\ninput:valid {\n    background: #eaf2ffbf !important;\n}\n\n::-webkit-input-placeholder {\n    color: #b9b9b9;\n}\n\n::-moz-placeholder {\n    color: #b9b9b9;\n}\n\n:-ms-input-placeholder {\n    color: #b9b9b9;\n}\n\n:-moz-placeholder {\n    color: #b9b9b9;\n}\n\n/* alert */\n.alert {\n    position: absolute;\n    display: inline-block;\n    margin-top: 6rem;\n    max-width: 300px;\n    width: 100%;\n    margin: auto;\n    z-index: 9999999;\n    color: white;\n    font-weight: 300;\n    font-size: 1em;\n    text-align: center;\n}\n\n.alert-danger {\n    background-color: #000000;\n}\n\n.alert-success {\n\n    background-color: #3b593b;\n}\n\n.debug {\n    border: 1px solid red;\n}\n\n\n\ninput {\n    cursor: text;\n    color: #000 !important;\n    display: block;\n    border: none;\n    font-size: 1em;\n    padding: 1rem;\n    border-radius: 2px;\n}\n\ninput::placeholder {\n    font-size: 0.8rem;\n    font-style: italic;\n}\n\ninput {\n    transition: background .5s ease-out;\n}\n\n\n.field_income svg {\n    width: 100px;\n    height: 100px;\n}\n\n.field_income label {\n    display: inline-grid;\n    place-items: center;\n    background: var(--color-white);\n    /* color: #fff; */\n    padding: 10px 20px;\n    font-family: sans-serif, Arial;\n    font-size: 1.6rem;\n    font-weight: 600;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    width: 100%;\n    min-height: 100px;\n}\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/grid.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".paddin-0 {\n\tpadding: 0;\n}\n\nsection {\n\tpadding: 2rem;\n}\n@media(min-width:1366px) {\n\tsection {\n\t\tpadding: 4rem 2rem;\n\t}\n}\n\n.grid {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-gap: 1rem;\n\twidth: 100%;\n\tmax-width: var(--page-maxwidth);\n\tmargin: auto;\n}\n\n.max-width-100 {\n\tmax-width: 100%;\n}\n\n.max-width-768 {\n\tmax-width: 768px;\n}\n\n.max-width-1024 {\n\tmax-width: 1024px;\n}\n\n.max-width-1268 {\n\tmax-width: 1268px;\n}\n.gap-0 {\n\tgrid-gap: 0rem;\n}\n.gap-1 {\n\tgrid-gap: 1rem;\n}\n\n.gap-2 {\n\tgrid-gap: 2rem;\n}\n\n.gap-3 {\n\tgrid-gap: 3rem;\n}\n\n.gap-4 {\n\tgrid-gap: 4rem;\n}\n\n.row {\n\tgrid-column: 1 / -1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n\n.columns-1,\n.columns-2,\n.columns-3,\n.size-1s-1l {\n\tgrid-template-columns: repeat(1, 1fr);\n}\n\n@media(min-width: 1024px) {\n\t.columns-2 {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t.columns-3 {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t.size-1s-1l {\n\t\tgrid-template-columns: 1fr 2fr;\n\t}\n\n\t.size-1l-1s {\n\t\tgrid-template-columns: 2fr 1fr;\n\t}\n}\n\n\n\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/navbar.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".navbar {\n\tposition: fixed;\n\tbackground: var(--color-primary);\n\twidth: 100%;\n\tz-index: 5;\n\tpadding: 1rem 0rem;\n}\n\n.navbar__container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\topacity: 1;\n\twidth: 100%;\n\tmax-width: 95%;\n\tmargin: auto;\n}\n\n.navbar__brand {\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\tmax-width: 6rem;\n\tcolor: var(--color-white);\n\t-webkit-animation-name: fadeIn;\n  -webkit-animation-duration: 0.5s;\n  animation-name: fadeIn;\n  animation-duration: 0.5s;\n}\n\n.navbar__menu {\n\tdisplay: none;\n\tjustify-content: flex-end;\n\twidth: auto;\n\t-webkit-animation-name: fadeIn;\n  -webkit-animation-duration: 0.5s;\n  animation-name: fadeIn;\n  animation-duration: 0.5s;\n\t\n}\n@-webkit-keyframes fadeIn { \n\t0% { opacity: 0; }\n\t20% { opacity: 0; }\n\t40% { opacity: 0.3; }\n\t60% { opacity: 0.5; }\n\t80% { opacity: 0.9; }\n\t100% { opacity: 1; }\n  }\n  \n  @keyframes fadeIn {\n\t0% { opacity: 0; }\n\t20% { opacity: 0; }\n\t40% { opacity: 0.3; }\n\t60% { opacity: 0.5; }\n\t80% { opacity: 0.9; }\n\t100% { opacity: 1; }\n  }\n.navbar__menu-list {\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tmin-width: 488px;\n}\n\n.navbar__menu-item a {\n\tcolor: #fff;\n}\n\n@media(min-width: 768px) {\n\t.navbar__menu {\n\t\tdisplay: flex;\n\t}\n}";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/progressbar.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += ".progressbar{\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\theight: 10rem;\n\tposition: relative;\n\twidth: 10rem;\n\tbottom: -109px;\n\t/* top:100px; */\n}\n\n.progressbar:before {\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: #fff;\n\tborder-radius: 50%;\n\tcontent: attr(data-progress) '% Completed';\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tfont-size: 0.8em;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\tposition: absolute;\n\tleft: 0.5rem;\n\tright: 0.5rem;\n\ttop: 0.5rem;\n\tbottom: 0.5rem;\n\t-webkit-box-shadow: var(--shadow-2);\n\tbox-shadow: var(--shadow-2);\n\ttransition: -webkit-transform 2s ease;\n\t-webkit-transition: -webkit-transform 2s ease;\n\ttransition: transform 2s ease;\n\ttransition: transform 2s ease, -webkit-transform 2s ease;\n\ttransition: transform 2s ease, -webkit-transform 0.2s ease;\n}\n\n.progressbar:after {\n\tbackground-color: #ddd;\n\tborder-radius: 50%;\n\tcontent: '';\n\tdisplay: inline-block;\n\theight: 100%;\n\twidth: 100%;\n\t-webkit-transition: 2s ease-in-out;\n\ttransition: 2s ease-in-out;\n}\n\n.progressbar:hover:before,\n.progressbar:focus:before {\n\t-webkit-transform: scale(0.8);\n\ttransform: scale(0.8);\n\n}\n\n.progressbar[data-progress=\"0\"]:after {\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(50%, #ddd), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, left top, right top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(90deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"1\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(93.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"2\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(97.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"3\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(100.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"4\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(104.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"5\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(108deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"6\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(111.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"7\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(115.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"8\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(118.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"9\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(122.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"10\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(126deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"11\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(129.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"12\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(133.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"13\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(136.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"14\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(140.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"15\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(144deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"16\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(147.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"17\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(151.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"18\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(154.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"19\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(158.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"20\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(162deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"21\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(165.60000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"22\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(169.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"23\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(172.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"24\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(176.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"25\"]:after {\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(50%, #ddd), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, left top, left bottom, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"26\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(183.60000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"27\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(187.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"28\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(190.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"29\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(194.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"30\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(198deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"31\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(201.60000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"32\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(205.2deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"33\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(208.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"34\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(212.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"35\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(216deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"36\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(219.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"37\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(223.20000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"38\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(226.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"39\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(230.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"40\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(234deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"41\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(237.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"42\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(241.20000000000002deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"43\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(244.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"44\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(248.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"45\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(252deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"46\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(255.6deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"47\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(259.20000000000005deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"48\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(262.8deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"49\"]:after {\n\tbackground-image: linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(266.4deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"50\"]:after {\n\tbackground-image: -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(-90deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"51\"]:after {\n\tbackground-image: linear-gradient(-86.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"52\"]:after {\n\tbackground-image: linear-gradient(-82.8deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"53\"]:after {\n\tbackground-image: linear-gradient(-79.2deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"54\"]:after {\n\tbackground-image: linear-gradient(-75.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"55\"]:after {\n\tbackground-image: linear-gradient(-72deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"56\"]:after {\n\tbackground-image: linear-gradient(-68.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"57\"]:after {\n\tbackground-image: linear-gradient(-64.8deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"58\"]:after {\n\tbackground-image: linear-gradient(-61.2deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"59\"]:after {\n\tbackground-image: linear-gradient(-57.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"60\"]:after {\n\tbackground-image: linear-gradient(-54deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"61\"]:after {\n\tbackground-image: linear-gradient(-50.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"62\"]:after {\n\tbackground-image: linear-gradient(-46.8deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"63\"]:after {\n\tbackground-image: linear-gradient(-43.199999999999996deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"64\"]:after {\n\tbackground-image: linear-gradient(-39.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"65\"]:after {\n\tbackground-image: linear-gradient(-36deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"66\"]:after {\n\tbackground-image: linear-gradient(-32.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"67\"]:after {\n\tbackground-image: linear-gradient(-28.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"68\"]:after {\n\tbackground-image: linear-gradient(-25.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"69\"]:after {\n\tbackground-image: linear-gradient(-21.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"70\"]:after {\n\tbackground-image: linear-gradient(-18deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"71\"]:after {\n\tbackground-image: linear-gradient(-14.399999999999991deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"72\"]:after {\n\tbackground-image: linear-gradient(-10.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"73\"]:after {\n\tbackground-image: linear-gradient(-7.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"74\"]:after {\n\tbackground-image: linear-gradient(-3.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"75\"]:after {\n\tbackground-image: -webkit-gradient(linear, left bottom, left top, color-stop(50%, var(--color-primary)), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(0deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"76\"]:after {\n\tbackground-image: linear-gradient(3.600000000000009deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"77\"]:after {\n\tbackground-image: linear-gradient(7.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"78\"]:after {\n\tbackground-image: linear-gradient(10.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"79\"]:after {\n\tbackground-image: linear-gradient(14.400000000000006deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"80\"]:after {\n\tbackground-image: linear-gradient(18deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"81\"]:after {\n\tbackground-image: linear-gradient(21.60000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"82\"]:after {\n\tbackground-image: linear-gradient(25.200000000000003deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"83\"]:after {\n\tbackground-image: linear-gradient(28.799999999999997deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"84\"]:after {\n\tbackground-image: linear-gradient(32.400000000000006deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"85\"]:after {\n\tbackground-image: linear-gradient(36deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"86\"]:after {\n\tbackground-image: linear-gradient(39.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"87\"]:after {\n\tbackground-image: linear-gradient(43.20000000000002deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"88\"]:after {\n\tbackground-image: linear-gradient(46.80000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"89\"]:after {\n\tbackground-image: linear-gradient(50.400000000000006deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"90\"]:after {\n\tbackground-image: linear-gradient(54deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"91\"]:after {\n\tbackground-image: linear-gradient(57.599999999999994deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"92\"]:after {\n\tbackground-image: linear-gradient(61.20000000000002deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"93\"]:after {\n\tbackground-image: linear-gradient(64.80000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"94\"]:after {\n\tbackground-image: linear-gradient(68.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"95\"]:after {\n\tbackground-image: linear-gradient(72deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"96\"]:after {\n\tbackground-image: linear-gradient(75.6deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"97\"]:after {\n\tbackground-image: linear-gradient(79.20000000000002deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"98\"]:after {\n\tbackground-image: linear-gradient(82.80000000000001deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"99\"]:after {\n\tbackground-image: linear-gradient(86.4deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n.progressbar[data-progress=\"100\"]:after {\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(50%, var(--color-primary)), color-stop(50%, transparent), to(transparent)), -webkit-gradient(linear, right top, left top, color-stop(50%, var(--color-primary)), color-stop(50%, #ddd), to(#ddd));\n\tbackground-image: linear-gradient(90deg, var(--color-primary) 50%, transparent 50%, transparent), linear-gradient(270deg, var(--color-primary) 50%, #ddd 50%, #ddd);\n}\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/css/ui/utilities.css"] = (function() {
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/icons/icon.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"2.0\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n<title>symbol SVG Library</title>\n<symbol id=\"icon-home\" viewBox=\"0 0 27.02 27.02\"><path d=\"M3.674,24.876c0,0-0.024,0.604,0.566,0.604c0.734,0,6.811-0.008,6.811-0.008l0.01-5.581c0,0-0.096-0.92,0.797-0.92h2.826c1.056,0,0.991,0.92,0.991,0.92l-0.012,5.563c0,0,5.762,0,6.667,0c0.749,0,0.715-0.752,0.715-0.752V14.413l-9.396-8.358l-9.975,8.358C3.674,14.413,3.674,24.876,3.674,24.876z\" /><path d=\"M0,13.635c0,0,0.847,1.561,2.694,0l11.038-9.338l10.349,9.28c2.138,1.542,2.939,0,2.939,0L13.732,1.54L0,13.635z\" /><polygon points=\"23.83,4.275 21.168,4.275 21.179,7.503 23.83,9.752\" /></symbol>\n<symbol id=\"icon-portfolio\" viewBox=\"0 0 45 45\"><path d=\"M25.186,28.1c-0.987,1.211-2.427,1.838-3.875,1.838c-1.112,0-2.231-0.369-3.159-1.127c-2.139-1.746-2.457-4.896-0.71-7.036c0.988-1.21,2.426-1.837,3.876-1.837c1.112,0,2.231,0.369,3.162,1.127C26.613,22.812,26.934,25.961,25.186,28.1z M44.939,15.542l-5,22.5C39.688,39.186,38.671,40,37.5,40h-5h-25h-5C1.119,40,0,38.881,0,37.5v-30C0,6.119,1.119,5,2.5,5h30C33.881,5,35,6.119,35,7.5V10h2.5c1.381,0,2.5,1.119,2.5,2.5h2.5c0.758,0,1.477,0.344,1.95,0.936C44.925,14.027,45.105,14.802,44.939,15.542z M12.5,12.5h15c0-1.381,1.119-2.5,2.5-2.5h2.5V7.5h-30v30h2.502c0-0.182,5.058-23.042,5.058-23.042C10.313,13.314,11.328,12.5,12.5,12.5z M33.154,32.98l-3.945-3.222c-0.344-0.28-0.771-0.378-1.178-0.315l-0.459-0.375c0.953-1.438,1.378-3.146,1.201-4.885c-0.2-1.994-1.166-3.789-2.717-5.057c-1.336-1.09-3.021-1.691-4.743-1.691c-2.263,0-4.382,1.004-5.813,2.756c-2.616,3.205-2.138,7.938,1.065,10.554c1.335,1.09,3.019,1.689,4.741,1.689c1.843,0,3.583-0.675,4.94-1.867l0.521,0.424c0.02,0.408,0.199,0.81,0.543,1.09l3.944,3.221c0.279,0.229,0.614,0.34,0.948,0.34c0.436,0,0.865-0.188,1.163-0.553C33.893,34.45,33.796,33.505,33.154,32.98z\"/></symbol> \n<symbol id=\"icon-blog\" viewBox=\"0 0 45 45\"><path d=\"M44.449,16.561c-0.475-0.591-1.191-0.936-1.949-0.936H40c0-1.381-1.119-2.5-2.5-2.5H35v-2.5c0-1.381-1.119-2.5-2.5-2.5h-1.25v-5c0-0.69-0.561-1.25-1.25-1.25H5c-0.691,0-1.25,0.56-1.25,1.25v5H2.5c-1.381,0-2.5,1.119-2.5,2.5v30c0,1.381,1.119,2.5,2.5,2.5h5h25h5c1.172,0,2.188-0.814,2.439-1.958l5-22.5C45.105,17.927,44.924,17.152,44.449,16.561zM3.75,40.625H2.5v-30h1.25V40.625z M30,13.125c-1.381,0-2.5,1.119-2.5,2.5h-15c-1.172,0-2.188,0.814-2.441,1.958c0,0-5.057,22.862-5.057,23.042H5v-37.5h25V13.125z M32.5,13.125h-1.25v-2.5h1.25V13.125z M24.833,8.667H9.917c-0.69,0-1.25-0.56-1.25-1.25s0.56-1.25,1.25-1.25h14.916c0.69,0,1.25,0.56,1.25,1.25S25.523,8.667,24.833,8.667z M24.833,13.75H9.917c-0.69,0-1.25-0.56-1.25-1.25s0.56-1.25,1.25-1.25h14.916c0.69,0,1.25,0.56,1.25,1.25S25.523,13.75,24.833,13.75z\"/></symbol>  \n<symbol id=\"icon-contact\" viewBox=\"0 0 455 455\"><polygon points=\"55,98.788 19.723,98.788 19.723,128.788 55,128.788 55,212.5 15,212.5 15,242.5 55,242.5 55,326.212 15,326.212 15,356.212 55,356.212 55,455 125,455 125,0 55,0 \"/><path d=\"M155,0v455h285V0H155z M297.5,135.862c24.377,0,44.138,19.761,44.138,44.138s-19.761,44.138-44.138,44.138 S253.362,204.377,253.362,180S273.123,135.862,297.5,135.862z M217.5,319.138c0-44.183,35.817-80,80-80s80,35.817,80,80H217.5z\"/></symbol>\n<symbol id=\"folderPapper\" viewBox=\"0 0 512 512\"><path d=\"M128,80c-4.8,0-8,3.2-8,8s3.2,8,8,8h8c4.8,0,8-3.2,8-8s-3.2-8-8-8H128z\"/><path d=\"M160,80c-4.8,0-8,3.2-8,8s3.2,8,8,8h8c4.8,0,8-3.2,8-8s-3.2-8-8-8H160z\"/><path d=\"M96,96h8c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8S91.2,96,96,96z\"/><path d=\"M96,64h88c4.8,0,8-3.2,8-8s-3.2-8-8-8H96c-4.8,0-8,3.2-8,8S91.2,64,96,64z\"/><path d=\"M88,144c0,4.8,3.2,8,8,8h240c4.8,0,8-3.2,8-8s-3.2-8-8-8H96C91.2,136,88,139.2,88,144z\"/><path d=\"M336,168H192c-4.8,0-8,3.2-8,8s3.2,8,8,8h144c4.8,0,8-3.2,8-8S340.8,168,336,168z\"/><path d=\"M336,200H208c-4.8,0-8,3.2-8,8s3.2,8,8,8h128c4.8,0,8-3.2,8-8S340.8,200,336,200z\"/><path d=\"M80,480c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8s3.2,8,8,8H80z\"/><path d=\"M112,480c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8s3.2,8,8,8H112z\"/><path d=\"M48,480c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8s3.2,8,8,8H48z\"/><path d=\"M384,296c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8s3.2,8,8,8H384z\"/><path d=\"M416,296c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8s3.2,8,8,8H416z\"/><path d=\"M352,296c4.8,0,8-3.2,8-8s-3.2-8-8-8h-8c-4.8,0-8,3.2-8,8s3.2,8,8,8H352z\"/><path d=\"M8,344c4.8,0,8-3.2,8-8v-8c0-4.8-3.2-8-8-8s-8,3.2-8,8v8C0,340.8,3.2,344,8,344z\"/><path d=\"M509.6,250.4c-0.8-1.6-3.2-2.4-5.6-2.4h-24V56c0-2.4-0.8-4-2.4-5.6l-48-48c-3.2-3.2-8-3.2-11.2,0c-3.2,3.2-3.2,8,0,11.2 L464,59.2V344c0,4.8,3.2,8,8,8s8-3.2,8-8v-80h15.2l-22.4,232H448V256c0-4.8-3.2-8-8-8V72c0-2.4-0.8-4-2.4-5.6l-64-64     c-3.2-3.2-8-3.2-11.2,0c-3.2,3.2-3.2,8,0,11.2L424,75.2V248h-24V88c0-2.4-0.8-4-2.4-5.6l-80-80C316,0.8,314.4,0,312,0H40     c-4.8,0-8,3.2-8,8v168H8c-4.8,0-8,3.2-8,8v112c0,4.8,3.2,8,8,8s8-3.2,8-8V192h139.2l29.6,67.2c1.6,3.2,4,4.8,7.2,4.8h198.4     c0.8,0,0.8,0,1.6,0c0.8,0,0.8,0,1.6,0H432v232H16V368c0-4.8-3.2-8-8-8s-8,3.2-8,8v136c0,4.8,3.2,8,8,8h432h40c4,0,7.2-3.2,8-7.2     l24-248C512,254.4,511.2,252,509.6,250.4z M320,27.2L372.8,80H320V27.2z M384,248H196.8l-29.6-67.2c-0.8-3.2-4-4.8-7.2-4.8H48V16     h256v72c0,4.8,3.2,8,8,8h72V248z\"/></symbol>  -->\n<symbol id=\"linkedin\" viewBox=\"0 0 512 512\"><path d=\"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0\"/></symbol>\n<symbol id=\"github\" viewBox=\"0 0 32 32\"><path d=\"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z\"></path></symbol>\n<symbol id=\"folder\" viewBox=\"0 0 60 60\"><path d=\"M14,23.5c-0.254,0-0.479,0.172-0.545,0.417L2,52.5v1c0,0.734-0.047,1,0.565,1h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.5c0,0,0-0.625,0-1H14z\"/><path d=\"M12.731,21.5H53h1v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v41.796l10.282-26.717C10.557,22.279,11.575,21.5,12.731,21.5z\"/></symbol>\n<symbol id=\"templates\" viewBox=\"0 0 512 512\"><path d=\"M496,108.136H273.448l-72.576-71.264H0v87.264v35.488v299.504c0,8.8,7.2,16,16,16h480c8.8,0,16-7.2,16-16V124.136 C512,115.336,504.8,108.136,496,108.136z M32,68.872h155.8l39.984,39.264H32V68.872z M480,443.128H32V159.624v-19.488h448V443.128z\"/><circle cx=\"256\" cy=\"291.48\" r=\"32.808\"/><path d=\"M379.08,309.928v-36.912l-37.552-3.752c-2.144-7.904-5.432-15.328-9.64-22.128l24.216-29.6l-26.096-26.096l-30.792,25.192c-6.44-3.392-13.36-6-20.64-7.64l-4.048-40.528H256.08h-0.152h-18.456l-4.048,40.528c-7.288,1.64-14.2,4.248-20.64,7.64l-30.8-25.192l-26.096,26.096l24.216,29.6c-4.2,6.8-7.496,14.232-9.64,22.128l-37.552,3.752v36.912l37.616,3.76c2.168,7.88,5.408,15.312,9.616,22.112l-24.24,29.616L182,391.512l30.776-25.184c6.44,3.384,13.36,5.984,20.648,7.64l4.048,40.528h18.456h0.152h18.456l4.048-40.528c7.288-1.64,14.208-4.248,20.648-7.64l30.776,25.184l26.096-26.096l-24.24-29.632c4.192-6.784,7.44-14.224,9.608-22.104L379.08,309.928z M256,346.984c-30.656,0-55.504-24.856-55.504-55.504s24.848-55.504,55.504-55.504s55.504,24.856,55.504,55.504S286.656,346.984,256,346.984z\"/></symbol>\n<symbol id=\"tutorials\" viewBox=\"0 0 512 512\" ><path d=\"M496,108.132H273.448l-72.576-71.256H0v122.752v299.496c0,8.8,7.2,16,16,16h480c8.8,0,16-7.2,16-16V124.132C512,115.332,504.8,108.132,496,108.132z M32,68.868h155.8l39.984,39.256H32V68.868z M480,443.124H32V140.132h448V443.124z\"/><rect x=\"92.648\" y=\"186.38\" width=\"84.992\" height=\"84.992\"/><rect x=\"214.816\" y=\"186.38\" width=\"84.992\" height=\"84.992\"/><rect x=\"336.96\" y=\"186.38\" width=\"84.992\" height=\"84.992\"/><rect x=\"92.648\" y=\"310.668\" width=\"84.992\" height=\"84.992\"/><rect x=\"214.816\" y=\"310.668\" width=\"84.992\" height=\"84.992\"/><rect x=\"336.96\" y=\"310.668\" width=\"84.992\" height=\"84.992\"/></symbol>\n<symbol id=\"apis\" viewBox=\"0 0 512 512\" ><path d=\"M496,108.132H273.456l-72.584-71.256H0v87.256v35.496v299.496c0,8.8,7.2,16,16,16h480c8.8,0,16-7.2,16-16V124.132C512,115.332,504.8,108.132,496,108.132z M32,68.876h155.8l39.984,39.256H32V68.876z M480,443.124H32V159.62v-19.496h448V443.124z\"/><polygon points=\"214.048,230.468 103.344,278.388 103.344,305.044 214.048,353.188 214.048,322.004 136.832,291.38 214.048,261.868\"/><polygon points=\"264.28,207.34 224.296,374.332 247.096,374.332 287.52,207.34\"/><polygon points=\"297.76,230.7 297.76,261.652 375.088,291.716 297.76,322.116 297.76,353.292 408.576,305.044 408.576,278.612 \"/></symbol>\n<symbol id=\"commmas\" viewBox=\"0 0 198 198\"><path d=\"M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z\"/><path d=\"M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z\"/></symbol>\n<symbol id=\"success\" viewBox=\"0 0 52 52\"><path d=\"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166C41.154,15.239,41.229,16.503,40.495,17.329z\"/></symbol>\t\n<symbol id=\"alert\" viewBox=\"0 0 426.667 426.667\"><path d=\"M213.333,0C95.573,0,0,95.467,0,213.333s95.573,213.333,213.333,213.333S426.667,331.2,426.667,213.333 S331.093,0,213.333,0z M234.667,320H192v-42.667h42.667V320z M234.667,234.667H192v-128h42.667V234.667z\"/></symbol>\n<symbol id=\"c#\" viewBox=\"0 0 312.553 312.553\"><path d=\"M302.553,0H10C4.477,0,0,4.478,0,10v292.553c0,5.522,4.477,10,10,10h292.553c5.523,0,10-4.478,10-10V10C312.553,4.478,308.076,0,302.553,0z M148.087,193.287c-9.481,8.296-21.592,12.866-34.102,12.866c-28.109,0-50.977-22.4-50.977-49.934c0-27.471,22.868-49.819,50.977-49.819c12.527,0,24.597,4.53,33.987,12.756c3.873,3.393,4.262,9.283,0.868,13.156c-3.392,3.874-9.283,4.265-13.156,0.869c-5.987-5.245-13.694-8.135-21.699-8.135c-17.827,0-32.33,13.984-32.33,31.173c0,17.251,14.503,31.286,32.33,31.286c7.991,0,15.741-2.931,21.822-8.252c3.875-3.391,9.765-2.998,13.157,0.877C152.355,184.006,151.962,189.896,148.087,193.287z M240.22,162.286c5.15,0,9.324,4.174,9.324,9.323s-4.174,9.323-9.324,9.323h-10.869l-3.378,14.904c-0.981,4.328-4.826,7.265-9.085,7.265c-0.683,0-1.376-0.075-2.069-0.232c-5.022-1.139-8.17-6.132-7.032-11.153l2.444-10.783h-20.201l-3.378,14.904c-0.981,4.328-4.826,7.265-9.084,7.265c-0.683,0-1.376-0.075-2.069-0.232c-5.022-1.139-8.17-6.132-7.032-11.153l2.448-10.799c-5.007-0.162-9.019-4.262-9.019-9.308c0-5.149,4.174-9.323,9.324-9.323h3.917l2.725-12.02h-6.642c-5.149,0-9.324-4.174-9.324-9.322c0-5.15,4.174-9.324,9.324-9.324h10.869l3.378-14.904c1.138-5.021,6.134-8.17,11.154-7.032c5.022,1.139,8.17,6.132,7.032,11.153l-2.444,10.783h20.201l3.378-14.904c1.138-5.021,6.133-8.17,11.154-7.032c5.022,1.139,8.17,6.132,7.032,11.153l-2.448,10.799c5.007,0.162,9.019,4.262,9.019,9.309c0,5.148-4.174,9.322-9.324,9.322h-3.917l-2.725,12.02H240.22z\"/><polygon points=\"194.258,162.286 214.458,162.286 217.183,150.267 196.982,150.267 \t\"/></symbol>\n<symbol id=\"css\" viewBox=\"0 0 512 512\"><path d=\"M32,0l40.8,460.8L256,512l183.136-51.168L480,0H32z M392.768,150.688l-5.152,57.888l-15.52,173.568L256,414.208l-0.064,0.032l-116-32.128l-8.128-90.752h56.832l4.224,47.104l63.072,17.024l0.064-0.064l63.136-17.024l8.608-78.432l-198.656,0.544l-5.632-53.664l209.056-2.432l4.224-57.44l-218.88,0.608l-3.68-53.376H256h141.824L392.768,150.688z\"/></symbol>\n<symbol id=\"html\" viewBox=\"0 0 299.215 299.215\"><path d=\"M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z\"/></symbol>\n<symbol id=\"js\" viewBox=\"0 0 312.553 312.553\"><path d=\"M302.553,0H10C4.477,0,0,4.478,0,10v292.553c0,5.522,4.477,10,10,10h292.553c5.523,0,10-4.478,10-10V10C312.553,4.478,308.076,0,302.553,0z M143.625,173.732c0,18.615-10.434,30.179-27.232,30.179c-10.55,0-19.978-5.292-26.547-14.901c-2.905-4.251-1.815-10.053,2.436-12.959c4.252-2.906,10.055-1.814,12.959,2.436c3.074,4.498,6.826,6.778,11.152,6.778c3.419,0,8.586,0,8.586-11.532v-47.467H99.504c-5.149,0-9.323-4.174-9.323-9.323c0-5.149,4.174-9.323,9.323-9.323h34.798c5.149,0,9.323,4.174,9.323,9.323V173.732z M189.441,205.6c-12.499,0-25.251-5.27-33.279-13.753c-3.54-3.74-3.377-9.642,0.362-13.181c3.741-3.54,9.644-3.377,13.181,0.362c4.486,4.74,12.417,7.925,19.736,7.925c7.493,0,16.244-2.188,16.244-8.351c0.048-5.81-3.045-7.986-17.415-12.339c-12.677-3.839-31.835-9.642-31.835-31.725c0-16.5,14.306-27.586,35.599-27.586c9.479,0,19.815,2.874,26.975,7.502c4.324,2.795,5.564,8.567,2.769,12.892c-2.796,4.324-8.568,5.564-12.892,2.769c-4.112-2.658-11.042-4.516-16.852-4.516c-7.82,0-16.952,2.342-16.952,8.939c0,7.165,4.189,9.516,18.594,13.879c12.277,3.718,30.83,9.337,30.656,30.262C224.331,194.75,210.31,205.6,189.441,205.6z\"/></symbol>\n<symbol id=\"uiux\" viewBox=\"0 0 56 56\"><path d=\"m12.03 4h2v2h-2z\"/><path d=\"m4.03 4h2v2h-2z\"/><path d=\"m20.03 4h2v2h-2z\"/><path d=\"m53.53 0h-51c-1.378 0-2.5 1.122-2.5 2.5v7.5h56v-7.5c0-1.378-1.122-2.5-2.5-2.5zm-45.5 7c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h4c.552 0 1 .448 1 1zm8 0c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h4c.552 0 1 .448 1 1zm8 0c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h4c.552 0 1 .448 1 1z\"/><path d=\"m4.03 52h18v-12h-18zm6-7h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2c.552 0 1 .448 1 1s-.448 1-1 1h-2v2c0 .552-.448 1-1 1s-1-.448-1-1v-2h-2c-.552 0-1-.448-1-1s.448-1 1-1z\"/><path d=\"m14.03 16h-10v10h10zm-4 6h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1z\"/><path d=\"m33.03 16h-10v10h10zm-4 6h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1z\"/><path d=\"m29.03 52h23v-12h-23zm20-3h-12c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1zm-1-6h1c.552 0 1 .448 1 1s-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1zm-16 0h12c.552 0 1 .448 1 1s-.448 1-1 1h-12c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h1c.552 0 1 .448 1 1s-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1z\"/><path d=\"m.03 12v41.5c0 1.379 1.122 2.5 2.5 2.5h51c1.378 0 2.5-1.122 2.5-2.5v-41.5zm41 22h1c.552 0 1 .448 1 1s-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1zm-1-3c0-.552.448-1 1-1h7c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1zm-19-16c0-.552.448-1 1-1h12c.552 0 1 .448 1 1v12c0 .552-.448 1-1 1h-12c-.552 0-1-.448-1-1zm14 16c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1zm-13-1h7c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1s.448-1 1-1zm-20-15c0-.552.448-1 1-1h12c.552 0 1 .448 1 1v12c0 .552-.448 1-1 1h-12c-.552 0-1-.448-1-1zm13 17h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1s-.448 1-1 1zm1 3c0 .552-.448 1-1 1h-7c-.552 0-1-.448-1-1s.448-1 1-1h7c.552 0 1 .448 1 1zm-13-5h7c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h1c.552 0 1 .448 1 1s-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1zm21 19c0 .552-.448 1-1 1h-20c-.552 0-1-.448-1-1v-14c0-.552.448-1 1-1h20c.552 0 1 .448 1 1zm-1-17h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1s-.448 1-1 1zm3-1c0-.552.448-1 1-1h7c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1zm28 18c0 .552-.448 1-1 1h-25c-.552 0-1-.448-1-1v-14c0-.552.448-1 1-1h25c.552 0 1 .448 1 1zm-1-17h-7c-.552 0-1-.448-1-1s.448-1 1-1h7c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1s-.448 1-1 1zm1-5c0 .552-.448 1-1 1h-12c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h12c.552 0 1 .448 1 1z\"/><path d=\"m42.03 26h10v-10h-10zm4-6h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z\"/></symbol>\n<symbol id=\"php\" viewBox=\"0 0 16.172 16.172\"><path d=\"M13.043,6.367c-0.237,0-0.398,0.022-0.483,0.047v1.523c0.101,0.022,0.223,0.03,0.391,0.03c0.621,0,1.004-0.313,1.004-0.842C13.954,6.651,13.625,6.367,13.043,6.367z\"/><path d=\"M15.14,0H1.033C0.463,0,0,0.462,0,1.032v14.108c0,0.568,0.462,1.031,1.033,1.031H15.14c0.57,0,1.032-0.463,1.032-1.031V1.032C16.172,0.462,15.71,0,15.14,0z M4.904,8.32C4.506,8.695,3.916,8.863,3.227,8.863c-0.153,0-0.291-0.008-0.398-0.023v1.846H1.673V5.594c0.36-0.061,0.865-0.107,1.578-0.107c0.719,0,1.233,0.139,1.577,0.414C5.158,6.162,5.38,6.59,5.38,7.095S5.211,8.029,4.904,8.32z M10.382,10.686H9.218v-2.16H7.297v2.16H6.125V5.526h1.172v1.983h1.921V5.526h1.164C10.382,5.526,10.382,10.686,10.382,10.686z M14.635,8.32c-0.397,0.375-0.987,0.543-1.677,0.543c-0.152,0-0.291-0.008-0.398-0.023v1.846h-1.155V5.594c0.359-0.061,0.864-0.107,1.577-0.107c0.72,0,1.232,0.139,1.577,0.414c0.33,0.261,0.552,0.689,0.552,1.194C15.11,7.6,14.942,8.029,14.635,8.32z\"/><path d=\"M3.312,6.367c-0.238,0-0.398,0.022-0.483,0.047v1.523c0.1,0.022,0.222,0.03,0.391,0.03c0.62,0,1.003-0.313,1.003-0.842C4.223,6.651,3.894,6.367,3.312,6.367z\"/></symbol>\n<symbol id=\"wp\" viewBox=\"0 0 96 96\"><path d=\"M47.611,50.029L37.214,80.236c3.104,0.914,6.386,1.414,9.788,1.414c4.033,0,7.904-0.697,11.506-1.965c-0.094-0.149-0.179-0.308-0.246-0.479L47.611,50.029z\"/><path d=\"M70.393,45.251c0-4.284-1.537-7.249-2.855-9.558c-1.758-2.854-3.404-5.271-3.404-8.126c0-3.185,2.415-6.15,5.819-6.15c0.151,0,0.299,0.021,0.448,0.028c-6.166-5.646-14.377-9.095-23.397-9.095c-12.107,0-22.756,6.211-28.951,15.617c0.813,0.025,1.579,0.041,2.23,0.041c3.624,0,9.233-0.438,9.233-0.438c1.868-0.111,2.089,2.633,0.224,2.854c0,0-1.878,0.221-3.967,0.33l12.617,37.531l7.584-22.74l-5.398-14.792c-1.866-0.11-3.633-0.33-3.633-0.33c-1.868-0.11-1.648-2.964,0.217-2.855c0,0,5.722,0.44,9.127,0.44c3.623,0,9.235-0.44,9.235-0.44c1.869-0.108,2.088,2.635,0.222,2.855c0,0-1.882,0.22-3.966,0.33L64.298,68l3.458-11.549C69.252,51.658,70.393,48.217,70.393,45.251z\"/><path d=\"M12.351,46.999c0,13.713,7.972,25.565,19.529,31.183L15.352,32.896C13.429,37.206,12.351,41.975,12.351,46.999z\"/><path d=\"M64.42,76.949C74.723,70.941,81.65,59.783,81.65,47c0-6.025-1.539-11.689-4.246-16.626c0.15,1.105,0.234,2.289,0.234,3.563c0,3.516-0.656,7.468-2.635,12.411L64.42,76.949z\"/><path d=\"M89,0H5C2.239,0,0,2.239,0,5v84c0,2.761,2.239,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M47.002,85.539c-21.251,0-38.54-17.289-38.54-38.54S25.75,8.461,47.002,8.461c21.25,0,38.535,17.287,38.535,38.538S68.252,85.539,47.002,85.539z\"/></symbol>\n<symbol id=\"tag\" viewBox=\"0 0 32 32\"><path d=\"M30.5 0h-12c-.825 0-1.977.477-2.561 1.061L1.06 15.94a1.505 1.505 0 0 0 0 2.121L13.939 30.94a1.505 1.505 0 0 0 2.121 0l14.879-14.879C31.522 15.478 32 14.325 32 13.5v-12c0-.825-.675-1.5-1.5-1.5zM23 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"></path></symbol>\n<symbol id=\"zoom\" viewBox=\"0 0 32 32\" ><path d=\"M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm2-14h-4v4H6v4h4v4h4v-4h4v-4h-4z\"></path></symbol> \n<symbol id=\"earth\" viewBox=\"0 0 32 32\"><path d=\"M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30c-1.967 0-3.84-.407-5.538-1.139l7.286-8.197a.998.998 0 0 0 .253-.664v-3a1 1 0 0 0-1-1c-3.531 0-7.256-3.671-7.293-3.707A1 1 0 0 0 9.001 12h-4a1 1 0 0 0-1 1v6c0 .379.214.725.553.894l3.447 1.724v5.871c-3.627-2.53-6-6.732-6-11.489 0-2.147.484-4.181 1.348-6h3.652c.265 0 .52-.105.707-.293l4-4A1 1 0 0 0 12.001 5V2.581a14.013 14.013 0 0 1 4-.581c2.2 0 4.281.508 6.134 1.412A5.961 5.961 0 0 0 20.002 8c0 1.603.624 3.109 1.757 4.243a5.985 5.985 0 0 0 4.536 1.751c.432 1.619 1.211 5.833-.263 11.635a.936.936 0 0 0-.026.163A13.956 13.956 0 0 1 16.002 30z\"></path></symbol>\n<symbol id=\"bubbles\" viewBox=\"0 0 36 32\"><path d=\"M34 28.161a3.65 3.65 0 0 0 2 3.256v.498a7.42 7.42 0 0 1-6.414-2.251c-.819.218-1.688.336-2.587.336-4.971 0-9-3.582-9-8s4.029-8 9-8 9 3.582 9 8c0 1.73-.618 3.331-1.667 4.64a3.635 3.635 0 0 0-.333 1.522zM16 0c8.702 0 15.781 5.644 15.995 12.672A12.262 12.262 0 0 0 27 11.625c-2.986 0-5.807 1.045-7.942 2.943-2.214 1.968-3.433 4.607-3.433 7.432 0 1.396.298 2.747.867 3.993a19.66 19.66 0 0 1-2.987-.151C10.068 29.279 5.966 29.895 2 29.986v-.841C4.142 28.096 6 26.184 6 24c0-.305-.024-.604-.068-.897C2.313 20.72 0 17.079 0 13 0 5.82 7.163 0 16 0z\"></path></symbol> \n<symbol id=\"cogs\" viewBox=\"0 0 32 32\"><path d=\"M11.366 22.564l1.291-1.807-1.414-1.414-1.807 1.291a4.996 4.996 0 0 0-1.071-.444L8 18H6l-.365 2.19a4.946 4.946 0 0 0-1.071.444l-1.807-1.291-1.414 1.414 1.291 1.807a4.943 4.943 0 0 0-.443 1.071L.001 24v2l2.19.365c.107.377.256.736.444 1.071l-1.291 1.807 1.414 1.414 1.807-1.291c.335.187.694.337 1.071.444L6.001 32h2l.365-2.19a4.946 4.946 0 0 0 1.071-.444l1.807 1.291 1.414-1.414-1.291-1.807c.187-.335.337-.694.444-1.071l2.19-.365v-2l-2.19-.365a4.946 4.946 0 0 0-.444-1.071zM7 27a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 27zm25-15v-2l-2.106-.383a8.715 8.715 0 0 0-.148-.743l1.799-1.159-.765-1.848-2.092.452a8.957 8.957 0 0 0-.422-.629l1.219-1.761-1.414-1.414-1.761 1.219a8.957 8.957 0 0 0-.629-.422l.452-2.092-1.848-.765-1.159 1.799a9.122 9.122 0 0 0-.743-.148L22 0h-2l-.383 2.106a8.715 8.715 0 0 0-.743.148L17.715.455l-1.848.765.452 2.092a8.957 8.957 0 0 0-.629.422l-1.761-1.219-1.414 1.414 1.219 1.761c-.149.203-.29.413-.422.629l-2.092-.452-.765 1.848 1.799 1.159a9.122 9.122 0 0 0-.148.743L10 10v2l2.106.383c.039.251.088.499.148.743l-1.799 1.159.765 1.848 2.092-.452c.132.216.273.426.422.629l-1.219 1.761 1.414 1.414 1.761-1.219c.203.149.413.29.629.422l-.452 2.092 1.848.765 1.159-1.799c.244.059.492.109.743.148L20 22h2l.383-2.106c.251-.039.499-.088.743-.148l1.159 1.799 1.848-.765-.452-2.092c.216-.132.426-.273.629-.422l1.761 1.219 1.414-1.414-1.219-1.761c.149-.203.29-.413.422-.629l2.092.452.765-1.848-1.799-1.159c.059-.244.109-.492.148-.743L32 12zm-11 3.35a4.35 4.35 0 1 1 .001-8.701A4.35 4.35 0 0 1 21 15.35z\"></path></symbol> \n<symbol id=\"tree\" viewBox=\"0 0 36 32\"><path d=\"M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649C13.216 24.637 8 27.97 8 32h28c0-4.03-5.216-7.364-12-7.918z\"></path><path d=\"M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513a11.33 11.33 0 0 1-1.265-1.844c-.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228.956-7.305.928-2.016 2.598-3.265 4.976-3.734C19.153 1.571 17.746 0 14 0 8 0 8 4.029 8 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784.555-12 3.888-12 7.918h8.719c.454-.403.956-.787 1.506-1.146z\"></path></symbol> \n<symbol id=\"library\" viewBox=\"0 0 34 32\"> <path d=\"M32 30v-2h-2V16h2v-2h-6v2h2v12h-6V16h2v-2h-6v2h2v12h-6V16h2v-2h-6v2h2v12H6V16h2v-2H2v2h2v12H2v2H0v2h34v-2h-2zM16 0h2l16 10v2H0v-2L16 0z\"></path></symbol> \n<symbol id=\"location\" viewBox=\"0 0 32 32\"><path d=\"M16 0C10.477 0 6 4.477 6 10c0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zm0 16.125a6.125 6.125 0 1 1 0-12.25 6.125 6.125 0 0 1 0 12.25zM12.125 10a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0z\"></path></symbol>\n<symbol id=\"mode\" viewBox=\"0 0 512 512\"><path d=\"M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM64 256c0-106.039 85.961-192 192-192v384c-106.039 0-192-85.961-192-192z\"></path></symbol>  \n<symbol id=\"rocket\" viewBox=\"0 0 32 32\"><path d=\"M22 2L12 12H6l-6 8s6.357-1.77 10.065-.94L0 32l13.184-10.255C15.023 25.953 12 32 12 32l8-6v-6l10-10 2-10-10 2z\"></path></symbol>\n<symbol id=\"htmlcss\" viewBox=\"0 0 512 512\"><path style=\"fill:#D7D420\" d=\"M420,296c0,17.673-14.327,32-32,32H124c-17.673,0-32-14.327-32-32V42c0-17.673,14.327-32,32-32h264  c17.673,0,32,14.327,32,32V296z\" data-original=\"#FFFFFF\" class=\"active-path\" data-old_color=\"#FFFFFF\"/><path style=\"fill:#BFB7B7\" d=\"M124.274,10H388c17.673,0,32,14.327,32,32v40H92.274V42C92.274,24.327,106.601,10,124.274,10z\" data-original=\"#FF5A5A\" class=\"\" data-old_color=\"#FF5A5A\"/><path style=\"fill:#231F20;\" d=\"M100.141,82h315.908\" data-original=\"#231F20\"/><path style=\"fill:#FF7800\" d=\"M456.75,296.5H348l-40-32v32h-16.75c-24.991,0-45.25,20.259-45.25,45.25v115  c0,24.991,20.259,45.25,45.25,45.25h165.5c24.991,0,45.25-20.259,45.25-45.25v-115C502,316.759,481.741,296.5,456.75,296.5z\" data-original=\"#78D2FA\" class=\"\" data-old_color=\"#78D2FA\"/><path style=\"fill:#5265FF\" d=\"M260.763,192.675H198.76c-19.943-16.456-45.509-26.342-73.384-26.342  C61.656,166.333,10,217.989,10,281.71s51.656,115.376,115.376,115.376S240.753,345.43,240.753,281.71  c0-19.94-5.059-38.698-13.963-55.062L260.763,192.675z\" data-original=\"#A5DC69\" class=\"\" data-old_color=\"#A5DC69\"/><path d=\"M258.095,56H377c5.523,0,10-4.478,10-10s-4.477-10-10-10H258.095c-5.523,0-10,4.478-10,10S252.572,56,258.095,56z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M169.98,56c2.63,0,5.21-1.07,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069s-1.07-5.21-2.93-7.07S172.61,36,169.98,36  c-2.64,0-5.22,1.069-7.08,2.93s-2.92,4.44-2.92,7.07s1.06,5.21,2.92,7.069C164.77,54.93,167.34,56,169.98,56z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M131.95,56c2.63,0,5.21-1.07,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069s-1.07-5.21-2.93-7.07  c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.069-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.069  C126.74,54.93,129.32,56,131.95,56z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M208,56c2.63,0,5.21-1.07,7.07-2.931C216.93,51.21,218,48.63,218,46s-1.07-5.21-2.93-7.07S210.63,36,208,36  s-5.21,1.069-7.07,2.93C199.07,40.79,198,43.37,198,46s1.07,5.21,2.93,7.069C202.79,54.93,205.37,56,208,56z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M297,134.044c0-5.522-4.477-10-10-10h-41c-5.523,0-10,4.478-10,10s4.477,10,10,10h41  C292.523,144.044,297,139.566,297,134.044z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M327.849,144.044h40.917c5.523,0,10-4.478,10-10s-4.477-10-10-10h-40.917c-5.523,0-10,4.478-10,10  S322.326,144.044,327.849,144.044z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M368.766,220.011c-0.001,0-0.002,0-0.003,0l-10.645,0.004c-5.522,0.002-9.998,4.48-9.996,10.004  c0.002,5.521,4.479,9.996,10,9.996c0.001,0,0.002,0,0.004,0l10.644-0.004c5.522-0.002,9.998-4.48,9.996-10.004  C378.764,224.485,374.287,220.011,368.766,220.011z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M322,220.036c-0.001,0-0.003,0-0.005,0l-38.649,0.021c-5.523,0.003-9.998,4.482-9.995,10.005  c0.003,5.521,4.479,9.995,10,9.995c0.001,0,0.003,0,0.005,0l38.649-0.021c5.523-0.003,9.998-4.482,9.995-10.005  C331.997,224.51,327.521,220.036,322,220.036z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M333,172.042h-33.427c-5.523,0-10,4.478-10,10s4.477,10,10,10H333c5.523,0,10-4.478,10-10S338.523,172.042,333,172.042z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M368.77,172.04c-2.64,0-5.21,1.069-7.08,2.93c-1.86,1.86-2.92,4.44-2.92,7.07s1.06,5.21,2.92,7.069  c1.87,1.87,4.44,2.931,7.08,2.931c2.63,0,5.2-1.061,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069s-1.07-5.21-2.93-7.07  C373.97,173.109,371.4,172.04,368.77,172.04z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M374,492c-2.63,0-5.21,1.069-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.069  c1.86,1.86,4.44,2.931,7.07,2.931s5.21-1.07,7.07-2.931c1.86-1.859,2.93-4.439,2.93-7.069s-1.07-5.21-2.93-7.07S376.63,492,374,492z  \" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M456.75,286.5H430V42c0-23.159-18.841-42-42-42H124c-23.159,0-42,18.841-42,42v122.072C34.18,181.761,0,227.818,0,281.71  c0,69.133,56.244,125.376,125.376,125.376c47.857,0,89.531-26.957,110.653-66.479c-0.008,0.382-0.029,0.76-0.029,1.143v115  c0,30.465,24.785,55.25,55.25,55.25h46.727c5.523,0,10-4.478,10-10s-4.477-10-10-10H291.25c-19.437,0-35.25-15.813-35.25-35.25v-115  c0-19.437,15.813-35.25,35.25-35.25H308c5.523,0,10-4.478,10-10v-11.193l23.753,19.002c1.773,1.419,3.977,2.191,6.247,2.191h108.75  c19.437,0,35.25,15.813,35.25,35.25v115c0,19.437-15.813,35.25-35.25,35.25h-40.701c-5.523,0-10,4.478-10,10s4.477,10,10,10h40.701  c30.465,0,55.25-24.785,55.25-55.25v-115C512,311.285,487.215,286.5,456.75,286.5z M124,20h264c12.131,0,22,9.869,22,22v30H102V42  C102,29.869,111.869,20,124,20z M125.376,387.086C67.271,387.086,20,339.814,20,281.71c0-58.105,47.271-105.377,105.376-105.377  c24.419,0,48.22,8.543,67.019,24.055c1.792,1.479,4.042,2.287,6.365,2.287h37.86l-16.902,16.901  c-3.134,3.134-3.831,7.957-1.713,11.851c8.339,15.326,12.747,32.714,12.747,50.283C230.752,339.814,183.481,387.086,125.376,387.086  z M314.247,256.691c-3.002-2.4-7.114-2.869-10.579-1.204c-3.464,1.665-5.668,5.169-5.668,9.013v22h-6.75  c-17.427,0-32.985,8.119-43.119,20.763c1.716-8.253,2.621-16.799,2.621-25.553c0-18.366-4.054-36.575-11.777-53.105l28.858-28.858  c2.86-2.86,3.716-7.161,2.168-10.898c-1.548-3.736-5.194-6.173-9.239-6.173h-58.494c-21.902-17.012-49.063-26.342-76.892-26.342  c-7.988,0-15.8,0.76-23.376,2.195V92h308v194.5h-58.492L314.247,256.691z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M310.023,431.25c5.523,0,10-4.478,10-10v-44c0-5.522-4.477-10-10-10s-10,4.478-10,10v12h-11.922v-12c0-5.522-4.477-10-10-10  s-10,4.478-10,10v44c0,5.522,4.477,10,10,10s10-4.478,10-10v-12h11.922v12C300.023,426.772,304.5,431.25,310.023,431.25z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M455.5,367.25c-5.523,0-10,4.478-10,10v44c0,5.522,4.477,10,10,10h18.892c5.523,0,10-4.478,10-10s-4.477-10-10-10H465.5v-34  C465.5,371.728,461.023,367.25,455.5,367.25z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M364.07,387.25c5.523,0,10-4.478,10-10s-4.477-10-10-10h-26.093c-5.523,0-10,4.478-10,10s4.477,10,10,10h3.046v34  c0,5.522,4.477,10,10,10s10-4.478,10-10v-34H364.07z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M414.797,401.384v19.866c0,5.522,4.477,10,10,10s10-4.478,10-10v-44c0-4.045-2.437-7.691-6.173-9.239  c-3.735-1.544-8.037-0.692-10.898,2.168l-9.742,9.742l-9.742-9.742c-2.86-2.86-7.163-3.714-10.898-2.168  c-3.737,1.548-6.173,5.194-6.173,9.239v44c0,5.522,4.477,10,10,10s10-4.478,10-10v-19.866c1.847,1.719,4.281,2.68,6.813,2.68  S412.95,403.103,414.797,401.384z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M73.486,265.14c4.426,0,8.587,1.724,11.717,4.854c3.905,3.904,10.238,3.905,14.142,0c3.905-3.905,3.906-10.237,0-14.143  c-6.907-6.907-16.091-10.711-25.859-10.711s-18.952,3.804-25.859,10.711c-6.908,6.907-10.711,16.091-10.711,25.859  s3.804,18.951,10.711,25.859c7.129,7.129,16.494,10.693,25.859,10.693s18.729-3.564,25.859-10.693  c3.905-3.905,3.906-10.237,0-14.143c-3.904-3.903-10.237-3.903-14.142,0c-6.462,6.461-16.974,6.461-23.434,0  c-3.13-3.13-4.854-7.291-4.854-11.717c0-4.427,1.724-8.587,4.854-11.717C64.899,266.862,69.06,265.14,73.486,265.14z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M131.004,265.14h13.285c5.523,0,10-4.478,10-10s-4.477-10-10-10h-13.285c-12.839,0-23.285,10.445-23.285,23.285  s10.446,23.285,23.285,23.285c1.812,0,3.285,1.474,3.285,3.285s-1.474,3.285-3.285,3.285h-13.285c-5.523,0-10,4.478-10,10  s4.477,10,10,10h13.285c12.839,0,23.285-10.445,23.285-23.285s-10.446-23.285-23.285-23.285c-1.812,0-3.285-1.474-3.285-3.285  S129.193,265.14,131.004,265.14z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/><path d=\"M184.675,265.14h13.285c5.523,0,10-4.478,10-10s-4.477-10-10-10h-13.285c-12.839,0-23.285,10.445-23.285,23.285  s10.446,23.285,23.285,23.285c1.812,0,3.285,1.474,3.285,3.285s-1.474,3.285-3.285,3.285H171.39c-5.523,0-10,4.478-10,10  s4.477,10,10,10h13.285c12.839,0,23.285-10.445,23.285-23.285s-10.446-23.285-23.285-23.285c-1.812,0-3.285-1.474-3.285-3.285  S182.864,265.14,184.675,265.14z\" data-original=\"#000000\" class=\"\" style=\"fill:#FFFFFF\" data-old_color=\"#000000\"/></symbol> \n<symbol id=\"mail\" viewBox=\"0 0 32 32\"><path d=\"M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zM8 8h16c.286 0 .563.061.817.177L16 18.463 7.183 8.176c.254-.116.531-.177.817-.177zM6 22V10c0-.042.002-.084.004-.125l5.864 6.842-5.8 5.8A1.983 1.983 0 0 1 5.999 22zm18 2H8c-.177 0-.35-.024-.517-.069l5.691-5.691L16 21.537l2.826-3.297 5.691 5.691c-.167.045-.34.069-.517.069zm2-2c0 .177-.024.35-.069.517l-5.8-5.8 5.865-6.842c.003.041.004.083.004.125v12z\"></path></symbol> \n<symbol id=\"arrowUp\" viewBox=\"0 0 192.701 192.701\"><path d=\"M20.746,104.169l75.61-74.528l75.61,74.54c4.74,4.704,12.439,4.704,17.179,0s4.74-12.319,0-17.011l-84.2-82.997c-4.559-4.511-12.608-4.535-17.191,0l-84.2,83.009c-4.74,4.692-4.74,12.319,0,17.011C8.307,108.873,16.006,108.873,20.746,104.169z\"/><path d=\"M104.946,88.373c-4.559-4.511-12.608-4.535-17.191,0l-84.2,82.997c-4.74,4.704-4.74,12.319,0,17.011c4.74,4.704,12.439,4.704,17.179,0l75.622-74.528l75.61,74.54c4.74,4.704,12.439,4.704,17.179,0s4.74-12.319,0-17.011L104.946,88.373z\"/></symbol> \n<symbol id=\"Stackoverflow\" viewBox=\"0 0 55 55\"><path d=\"M 40.925781 1.890625 L 37.859375 2.417969 L 41.1875 20.625 L 44.03125 20.253906 Z M 29.96875 6.351563 L 27.101563 8.078125 L 37.300781 23.035156 L 39.820313 21.480469 Z M 20.796875 15.03125 L 19.113281 17.703125 L 34.5 27 L 35.902344 24.578125 Z M 16.375 24.402344 L 15.628906 27.402344 L 33.359375 31.894531 L 33.640625 29.203125 Z M 9 29 L 9 47.984375 L 38.902344 48 L 38.902344 47.984375 C 38.933594 47.984375 39 29 39 29 L 36 29 L 36 45 L 12 45 L 12 29 Z M 15.152344 32.355469 L 14.902344 35.339844 L 33 37 L 33.203125 34.5 Z M 14.902344 39 L 15 42 L 33 41.929688 L 33 39 Z\"/></symbol> \n<symbol id=\"codepen\" viewBox=\"0 0 100 100\"><path d=\"M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z\"></path></symbol> \n<symbol id=\"clipboard\" viewBox=\"0 0 32 32\"><path d=\"M14 26.828l-6.414-7.414 1.828-1.828L14 21.172l8.586-7.586 1.829 1.828z\"></path><path d=\"M29 4h-9a4 4 0 0 0-8 0H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM16 2a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 2zm12 28H4V6h4v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h4v24z\"></path></symbol> \n<symbol id=\"dollar\" viewBox=\"0 0 50 50\"><path d=\"M15 2C6.716 2 0 8.716 0 17s6.716 15 15 15c8.284 0 15-6.716 15-15S23.284 2 15 2zm0 27C8.373 29 3 23.627 3 17S8.373 5 15 5s12 5.373 12 12-5.373 12-12 12zm1-13v-4h4v-2h-4V8h-2v2h-4v8h4v4h-4v2h4v2h2v-2h4v-8h-4zm-2 0h-2v-4h2v4zm4 6h-2v-4h2v4z\"></path></symbol> \n<symbol id=\"text\" viewBox=\"0 0 32 32\"><path d=\"M27 0H3C1.35 0 0 1.35 0 3v26c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zm-1 28H4V4h22v24zM8 14h14v2H8zm0 4h14v2H8zm0 4h14v2H8zm0-12h14v2H8z\"></path></symbol>\n<symbol id=\"quotes\" viewBox=\"0 0 32 32\" ><path d=\"M25 20a7 7 0 1 1 7-7l.031 1c0 7.732-6.268 14-14 14v-4a9.934 9.934 0 0 0 7.071-2.929c.364-.364.695-.75.995-1.157A7.081 7.081 0 0 1 25 20zM7 20a7 7 0 1 1 7-7l.031 1c0 7.732-6.268 14-14 14v-4a9.934 9.934 0 0 0 7.071-2.929c.364-.364.695-.75.995-1.157A7.081 7.081 0 0 1 7 20z\"></path></symbol>\n<symbol id=\"phone\" viewBox=\"0 0 24 24\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path></symbol>\n<symbol id=\"embed\" viewBox=\"0 0 40 32\" ><path d=\"M26 23l3 3 10-10-10-10-3 3 7 7z\"></path><path d=\"M14 9l-3-3-10 10 10 10 3-3-7-7z\"></path><path d=\"M21.916 4.704l2.171 0.592-6 22.001-2.171-0.592 6-22.001z\"></path></symbol>\n<symbol id=\"shield\" viewBox=\"0 0 32 32\" ><path d=\"M30.5 24H30v-6.5c0-1.93-1.57-3.5-3.5-3.5H18v-4h.5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5h-5c-.825 0-1.5.675-1.5 1.5v5c0 .825.675 1.5 1.5 1.5h.5v4H5.5C3.57 14 2 15.57 2 17.5V24h-.5c-.825 0-1.5.675-1.5 1.5v5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5H6v-6h8v6h-.5c-.825 0-1.5.675-1.5 1.5v5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5H18v-6h8v6h-.5c-.825 0-1.5.675-1.5 1.5v5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5zM6 30H2v-4h4v4zm12 0h-4v-4h4v4zM14 8V4h4v4h-4zm16 22h-4v-4h4v4z\"></path></symbol>\n<symbol id=\"businessman\" viewBox=\"0 0 81.016 81.016\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40.509\" cy=\"17.217\" r=\"17.217\"/><path d=\"m47.811 35.606h-14.608c-12.152 0-22.041 9.888-22.041 22.042v17.869l0.045 0.279 1.232 0.385c11.598 3.623 21.676 4.834 29.971 4.834 16.199 0 25.59-4.621 26.172-4.914l1.15-0.584h0.121v-17.869c1e-3 -12.154-9.886-22.042-22.042-22.042zm-3.901 34.677l-3.152 4.613c-0.043 0.063-0.111 0.1-0.186 0.1h-6e-3c-0.074 0-0.145-0.039-0.186-0.104l-2.928-4.616c-0.025-0.039-0.037-0.086-0.035-0.136l1.465-22.403c8e-3 -0.119 0.105-0.209 0.225-0.209h3.039c0.119 0 0.217 0.09 0.227 0.209l1.574 22.401c6e-3 0.053-9e-3 0.102-0.037 0.145zm-1.426-23.433h-3.613l-3.141-6.492c0-0.623 0.504-1.125 1.127-1.125h7.543c0.621 0 1.125 0.502 1.125 1.125l-3.041 6.492z\"/></symbol>\n<symbol id=\"www\" viewBox=\"0 0 496 496\"><path d=\"m8 167.988281h480c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-11.488281c-37.5625-90.507812-125.222657-150.125-223.199219-151.800781h-.296875c-.496094-.054688-.996094-.078125-1.496094-.070312-2.0625-.1562505-4.128906-.1562505-6.191406 0-.75-.0195318-1.496094.015624-2.238281.101562h-.105469c-.097656 0-.183594 0-.28125 0-97.976563 1.664062-185.640625 61.269531-223.214844 151.769531h-11.488281c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm309.023438-91.824219c-20.261719 2.289063-40.632813 3.542969-61.023438 3.753907v-63.066407c22.65625 4.136719 44.152344 25.710938 61.023438 59.3125zm-77.023438-59.3125v63.066407c-20.382812-.210938-40.738281-1.464844-60.992188-3.753907 16.792969-33.34375 38.207032-54.871093 60.992188-59.3125zm0 79.066407v56.070312h-86.398438c4.171876-20.730469 10.300782-41.019531 18.300782-60.59375 22.597656 2.78125 45.332031 4.292969 68.097656 4.523438zm16 0c22.761719-.230469 45.488281-1.742188 68.078125-4.53125 8 19.582031 14.136719 39.871093 18.320313 60.601562h-86.398438zm84.335938-6.851563c11.046874-1.78125 21.464843-3.878906 31.097656-6.277344 15.84375 20.941407 28.191406 44.308594 36.566406 69.199219h-49.320312c-4.167969-21.492187-10.308594-42.554687-18.34375-62.921875zm-6.59375-15.109375c-7.621094-16.742187-17.722657-32.238281-29.964844-45.96875 21.386718 9.652344 40.535156 23.652344 56.222656 41.105469-8.238281 1.839844-17.015625 3.46875-26.257812 4.863281zm-171.46875 0c-9.261719-1.394531-18.015626-3.015625-26.273438-4.863281 15.710938-17.488281 34.890625-31.511719 56.320312-41.175781-12.289062 13.738281-22.417968 29.261719-30.046874 46.039062zm-6.609376 15.109375c-8.03125 20.367188-14.171874 41.429688-18.34375 62.921875h-49.320312c8.378906-24.890625 20.734375-48.261719 36.585938-69.199219 9.613281 2.398438 20.03125 4.503907 31.078124 6.277344zm303.390626 62.921875h-34.191407c-8.335937-26.398437-20.773437-51.320312-36.863281-73.847656 4.640625-1.472656 9.011719-3.023437 13.113281-4.65625 24.675781 21.75 44.429688 48.515625 57.941407 78.503906zm-72.4375-90.207031c-2.949219 1-6.027344 1.96875-9.234376 2.902344-6.867187-8.136719-14.355468-15.730469-22.398437-22.710938 11.066406 5.730469 21.644531 12.355469 31.632813 19.808594zm-268 2.902344c-3.203126-.933594-6.277344-1.902344-9.234376-2.902344 10.007813-7.453125 20.601563-14.082031 31.679688-19.816406-8.054688 6.984375-15.558594 14.578125-22.445312 22.71875zm-23.695313 8.800781c4.09375 1.632813 8.464844 3.183594 13.109375 4.65625-16.097656 22.527344-28.550781 47.449219-36.894531 73.847656h-34.191407c13.523438-29.992187 33.289063-56.753906 57.976563-78.503906zm0 0\"/><path d=\"m488 327.988281h-480c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h11.488281c37.5625 90.507813 125.222657 150.125 223.199219 151.800781h.296875c.496094.058594.996094.082032 1.496094.070313h.800781.472656c.796875.050781 1.542969.058594 2.285156.058594 1.015626 0 1.945313 0 2.546876-.058594.800781.03125 1.601562-.007813 2.398437-.109375h.078125.28125c97.957031-1.683594 185.597656-61.28125 223.167969-151.761719h11.488281c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm-309.023438 91.824219c20.261719-2.289062 40.632813-3.542969 61.023438-3.753906v63.066406c-22.65625-4.136719-44.152344-25.710938-61.023438-59.3125zm77.023438 59.3125v-63.066406c20.382812.210937 40.738281 1.464844 60.992188 3.753906-16.792969 33.34375-38.214844 54.871094-60.992188 59.3125zm0-79.066406v-56.070313h86.398438c-4.171876 20.730469-10.300782 41.019531-18.300782 60.59375-22.597656-2.78125-45.332031-4.292969-68.097656-4.523437zm-16 0c-22.761719.230468-45.488281 1.742187-68.078125 4.53125-8-19.582032-14.136719-39.871094-18.320313-60.601563h86.398438zm-84.335938 6.851562c-11.046874 1.78125-21.464843 3.878906-31.097656 6.277344-15.84375-20.941406-28.191406-44.308594-36.566406-69.199219h49.335938c4.164062 21.492188 10.296874 42.554688 18.328124 62.921875zm6.59375 15.109375c7.617188 16.753907 17.722657 32.261719 29.964844 46-21.390625-9.660156-40.539062-23.667969-56.222656-41.136719 8.238281-1.839843 17.015625-3.46875 26.257812-4.863281zm171.46875 0c9.253907 1.394531 18.015626 3.015625 26.28125 4.863281-15.710937 17.488282-34.890624 31.515626-56.320312 41.183594 12.28125-13.742187 22.410156-29.265625 30.039062-46.046875zm6.609376-15.109375c8.03125-20.367187 14.171874-41.429687 18.34375-62.921875h49.320312c-8.378906 24.890625-20.734375 48.261719-36.585938 69.199219-9.613281-2.398438-20.03125-4.503906-31.078124-6.277344zm-303.390626-62.921875h34.191407c8.335937 26.398438 20.773437 51.320313 36.863281 73.847657-4.640625 1.472656-9.011719 3.023437-13.113281 4.65625-24.675781-21.75-44.429688-48.515626-57.941407-78.503907zm72.4375 90.207031c2.949219-.996093 6.027344-1.964843 9.234376-2.902343 6.882812 8.136719 14.382812 15.730469 22.4375 22.710937-11.078126-5.730468-21.667969-12.355468-31.671876-19.808594zm268-2.902343c3.203126.9375 6.277344 1.90625 9.234376 2.902343-10.007813 7.453126-20.601563 14.082032-31.679688 19.816407 8.054688-6.984375 15.558594-14.578125 22.445312-22.71875zm23.695313-8.800781c-4.09375-1.632813-8.464844-3.183594-13.109375-4.65625 16.097656-22.527344 28.550781-47.449219 36.894531-73.847657h34.191407c-13.523438 29.992188-33.289063 56.753907-57.976563 78.503907zm0 0\"/><path d=\"m288.335938 205.691406-18.199219 60.695313-14.9375-29.972657c-1.503907-2.523437-4.222657-4.070312-7.160157-4.070312-2.933593 0-5.65625 1.546875-7.160156 4.070312l-15.015625 29.972657-18.199219-60.671875c-1.269531-4.230469-5.726562-6.632813-9.960937-5.367188-4.230469 1.269532-6.636719 5.726563-5.367187 9.960938l24 80c.941406 3.140625 3.707031 5.390625 6.976562 5.671875 3.277344.316406 6.402344-1.433594 7.847656-4.390625l16.839844-33.714844 16.800781 33.6875c1.359375 2.726562 4.152344 4.441406 7.199219 4.425781.230469.011719.457031.011719.6875 0 3.269531-.28125 6.035156-2.53125 6.976562-5.671875l24-80c1.269532-4.234375-1.136718-8.691406-5.367187-9.960937-4.234375-1.265625-8.691406 1.136719-9.960937 5.367187zm0 0\"/><path d=\"m416.335938 205.691406-18.199219 60.695313-14.9375-29.972657c-1.503907-2.523437-4.222657-4.070312-7.160157-4.070312-2.933593 0-5.65625 1.546875-7.160156 4.070312l-15.015625 29.972657-18.199219-60.671875c-1.269531-4.230469-5.726562-6.632813-9.960937-5.367188-4.230469 1.269532-6.636719 5.726563-5.367187 9.960938l24 80c.941406 3.140625 3.707031 5.390625 6.976562 5.671875 3.273438.3125 6.402344-1.4375 7.847656-4.390625l16.839844-33.714844 16.800781 33.6875c1.359375 2.726562 4.152344 4.441406 7.199219 4.425781.230469.011719.457031.011719.6875 0 3.269531-.28125 6.035156-2.53125 6.976562-5.671875l24-80c1.269532-4.234375-1.136718-8.691406-5.367187-9.960937-4.234375-1.265625-8.691406 1.136719-9.960937 5.367187zm0 0\"/><path d=\"m160.335938 205.691406-18.199219 60.695313-14.9375-29.972657c-1.503907-2.523437-4.222657-4.070312-7.160157-4.070312-2.933593 0-5.65625 1.546875-7.160156 4.070312l-15.015625 29.972657-18.199219-60.671875c-1.269531-4.230469-5.726562-6.632813-9.960937-5.367188-4.230469 1.269532-6.636719 5.726563-5.367187 9.960938l24 80c.941406 3.140625 3.707031 5.390625 6.976562 5.671875 3.277344.320312 6.40625-1.433594 7.847656-4.390625l16.839844-33.714844 16.839844 33.6875c1.355468 2.714844 4.128906 4.425781 7.160156 4.425781.230469.011719.457031.011719.6875 0 3.269531-.28125 6.035156-2.53125 6.976562-5.671875l24-80c1.269532-4.234375-1.136718-8.691406-5.367187-9.960937-4.234375-1.265625-8.691406 1.136719-9.960937 5.367187zm0 0\"/></symbol>\n<symbol id=\"user\" viewBox=\"0 0 55 55\">\n<path d=\"M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752\nc0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348\nc0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98\nc0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033\nc0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55\nc0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287\nc0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104\nc0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1\nc0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764\nl-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5\nc0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957\nc0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545\nc0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8\ns-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545\nc0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313\nc-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z\"/>\n</symbol>\n<symbol id=\"quill\" viewBox=\"0 0 331.331 331.331\">\n<path d=\"M30.421,317.462l4.422-17.661l-12.194-4.814l-8.376,13.804c0,0,4.618,12.526-0.511,22.539\nC13.766,331.331,20.184,320.399,30.421,317.462z M22.229,309.358c1.501-0.615,3.231,0.087,3.851,1.561\nc0.625,1.474-0.087,3.171-1.588,3.786c-1.501,0.615-3.231-0.087-3.851-1.561C20.01,311.664,20.723,309.967,22.229,309.358z\"/>\n<path d=\"M158.353,112.621c-35.115,28.8-81.086,88.124-120.073,157.423l-0.022-0.027l-6.815,12.026\nl7.267,2.796l3.84-10.117c20.799-37.491,77.224-135.4,180.397-200.451c0,0,38.411-22.877,76.256-54.516\nc-9.214,7.702-27.391,17.356-37.247,23.584C236.088,59.683,204.166,75.043,158.353,112.621z\"/>\n<path d=\"M33.2,215.365c-7.985,28.223-7.528,49.718-4.438,55.625h4.83\nc13.337-27.625,77.572-127.693,117.554-159.016c41.424-32.455,73.378-51.339,100.253-65.111\nc9.437-4.835,19.118-11.384,27.848-17.949c10.601-8.36,21.348-17.302,30.758-26.053L282.728,20.75L294.89,2.148L271.67,25.759\nL286.78,0c-35.746,3.225-68.918,21.109-68.918,21.109c-13.271,15.741-23.959,40.782-23.959,40.782\nc-0.37-12.521,8.11-31.481,8.11-31.481c-6.266,2.861-30.073,16.459-30.073,16.459c-11.645,9.66-15.262,35.06-15.262,35.06\nc-2.214-10.019,5.526-29.333,5.526-29.333c-33.543,19.32-57.502,52.231-57.502,52.231c-16.584,32.553-2.948,57.953-8.11,51.872\nc-5.162-6.081-4.052-28.261-4.052-28.261c-35.017,33.63-38.699,49.724-38.699,49.724c-5.896,14.31-11.058,52.59-11.058,52.59\nc-3.318-3.579,0-23.611,0-23.611c-8.479,17.889-4.422,34.701-4.422,34.701C34.309,240.407,33.2,215.365,33.2,215.365z\"/>\n<path d=\"M310.01,14.191c0,0-13.483,13.065-30.758,26.053c-27.081,21.359-53.156,38.819-53.156,38.819\nC123.945,139.425,67.025,237.932,48.212,271.708h10.002c3.535-2.834,8.844-4.971,31.014-11.389\nc28.011-8.11,44.72-25.041,44.72-25.041s-25.553,14.31-37.595,12.88s-28.223,3.1-28.223,3.1s-6.179-2.861,24.291-7.392\ns80.596-38.634,80.596-38.634s-19.167,7.87-28.011,7.152c-8.844-0.718-30.714,0-30.714,0c14.495-3.34,28.011-1.43,50.126-9.779\nc22.115-8.349,20.886-7.631,20.886-7.631c25.063-8.349,35.474-34.342,35.474-34.342c-4.335,1.67-37.443,5.722-51.176,1.67\nc-13.734-4.052-37.132,0-37.132,0c22.115-7.392,27.032-4.052,32.433-4.291c5.406-0.239,22.855,1.191,57.502-10.731\ns44.475-26.711,44.475-26.711l-23.366,3.122c15.257-2.567,32.455-12.662,32.455-12.662c-10.568,2.861-27.032,4.291-27.032,4.291\nc19.412-4.291,30.225-10.253,30.225-10.253c18.183-13.832,22.36-34.342,22.36-34.342c-25.803,8.822-46.194,4.77-46.194,4.77\nc35.387-2.382,45.215-11.449,50.126-13.592c4.917-2.148,6.94-11.03,6.94-11.03c-17.878,6.44-38.15,7.511-38.15,7.511\nc21.93-3.399,40.722-14.49,40.722-14.49V32.792c-8.479,4.83-23.399,8.588-23.399,8.588l23.219-15.023\nC316.091,18.841,310.01,14.191,310.01,14.191z\"/>\n<polygon points=\"23.551,290.571 37.361,296.103 39.933,289.989 26.124,284.458 \t\"/>\n<path  d=\"M177.036,285.458c-45.628,21.936-89.462,36.888-147.758,38.846c-5.439,0.185-5.466,5.624,0,5.439\nc52.15-1.751,95.543-12.961,137.391-32.575c46.618-21.854,89.435-40.167,147.828-46.39c5.385-0.577,3.095-5.814-2.252-5.243\nC260.531,251.051,218.514,265.519,177.036,285.458z\"/>\n</symbol>\n<symbol id=\"clock\" viewBox=\"0 0 512 512\">\n<path d=\"M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,494.933\nC124.254,494.933,17.067,387.746,17.067,256S124.254,17.067,256,17.067S494.933,124.254,494.933,256S387.746,494.933,256,494.933z\n\"/>\n<path d=\"M256,42.667C138.368,42.667,42.667,138.368,42.667,256S138.368,469.333,256,469.333S469.333,373.632,469.333,256\nS373.632,42.667,256,42.667z M256,452.267c-108.22,0-196.267-88.038-196.267-196.267S147.78,59.733,256,59.733\nS452.267,147.772,452.267,256S364.22,452.267,256,452.267z\"/>\n<path d=\"M256,76.8c-4.71,0-8.533,3.814-8.533,8.533v25.6c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-25.6\nC264.533,80.614,260.71,76.8,256,76.8z\"/>\n<path d=\"M256,392.533c-4.71,0-8.533,3.814-8.533,8.533v25.6c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-25.6\nC264.533,396.348,260.71,392.533,256,392.533z\"/>\n<path d=\"M426.667,247.467h-25.6c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h25.6c4.71,0,8.533-3.814,8.533-8.533\nS431.377,247.467,426.667,247.467z\"/>\n<path d=\"M110.933,247.467h-25.6c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h25.6c4.71,0,8.533-3.814,8.533-8.533\nS115.644,247.467,110.933,247.467z\"/>\n<path d=\"M256,221.867c-18.825,0-34.133,15.309-34.133,34.133c0,18.825,15.309,34.133,34.133,34.133\nc18.825,0,34.133-15.309,34.133-34.133C290.133,237.175,274.825,221.867,256,221.867z M256,273.067\nc-9.412,0-17.067-7.654-17.067-17.067c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067\nC273.067,265.412,265.412,273.067,256,273.067z\"/>\n<path d=\"M256,145.067c-4.71,0-8.533,3.814-8.533,8.533v76.8c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-76.8\nC264.533,148.881,260.71,145.067,256,145.067z\"/>\n<path d=\"M324.267,247.467H281.6c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h42.667c4.71,0,8.533-3.814,8.533-8.533\nS328.977,247.467,324.267,247.467z\"/>\n<path d=\"M159.454,147.388L142.566,130.5c-3.337-3.337-8.73-3.337-12.066,0c-3.336,3.336-3.336,8.73,0,12.066l16.888,16.887\nc1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.828,6.033-2.5C162.79,156.117,162.79,150.724,159.454,147.388z\"/>\n<path d=\"M381.5,369.434l-16.887-16.887c-3.337-3.337-8.73-3.337-12.066,0s-3.337,8.73,0,12.066l16.887,16.887\nc1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5C384.836,378.163,384.836,372.77,381.5,369.434z\"/>\n<path d=\"M381.5,130.5c-3.337-3.337-8.73-3.337-12.066,0l-16.887,16.887c-3.337,3.337-3.337,8.73,0,12.066\nc1.664,1.664,3.849,2.5,6.033,2.5c2.176,0,4.361-0.828,6.033-2.5l16.887-16.887C384.836,139.23,384.836,133.837,381.5,130.5z\"/>\n<path d=\"M159.454,352.546c-3.336-3.337-8.73-3.337-12.066,0L130.5,369.434c-3.337,3.337-3.337,8.73,0,12.066\nc1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l16.887-16.887C162.79,361.276,162.79,355.883,159.454,352.546z\"/>\n</symbol>\n<symbol id=\"calendar\" viewBox=\"0 0 36.447 36.447\">\n<path d=\"M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75\nc0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75\nc-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24\nc2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25\nc0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75\nc0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75\nc0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z\nM31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z\"/>\n<rect x=\"6.724\" y=\"14.626\" width=\"4.595\" height=\"4.089\"/>\n<rect x=\"12.857\" y=\"14.626\" width=\"4.596\" height=\"4.089\"/>\n<rect x=\"18.995\" y=\"14.626\" width=\"4.595\" height=\"4.089\"/>\n<rect x=\"25.128\" y=\"14.626\" width=\"4.596\" height=\"4.089\"/>\n<rect x=\"6.724\" y=\"20.084\" width=\"4.595\" height=\"4.086\"/>\n<rect x=\"12.857\" y=\"20.084\" width=\"4.596\" height=\"4.086\"/>\n<rect x=\"18.995\" y=\"20.084\" width=\"4.595\" height=\"4.086\"/>\n<rect x=\"25.128\" y=\"20.084\" width=\"4.596\" height=\"4.086\"/>\n<rect x=\"6.724\" y=\"25.54\" width=\"4.595\" height=\"4.086\"/>\n<rect x=\"12.857\" y=\"25.54\" width=\"4.596\" height=\"4.086\"/>\n<rect x=\"18.995\" y=\"25.54\" width=\"4.595\" height=\"4.086\"/>\n<rect x=\"25.128\" y=\"25.54\" width=\"4.596\" height=\"4.086\"/>\n</symbol>\n<symbol id=\"timeline\" viewBox=\"0 0 459.785 459.785\">\n<path d=\"M173.322,114.954c-0.019,0.358-0.019,0.716,0,1.074c0.297,5.474,4.975,9.672,10.449,9.375h175.02\nc0.358,0.019,0.716,0.019,1.074,0c5.474-0.297,9.672-4.975,9.375-10.449V10.464c0.019-0.358,0.019-0.716,0-1.074\nc-0.297-5.474-4.975-9.672-10.449-9.375h-175.02c-0.358-0.019-0.716-0.019-1.074,0c-5.474,0.297-9.672,4.975-9.375,10.449\nV114.954z M194.22,20.913h154.122v83.592H194.22V20.913z\"/>\n<path d=\"M421.486,282.137v-104.49c0.019-0.358,0.019-0.716,0-1.074c-0.297-5.474-4.975-9.672-10.449-9.375H183.771\nc-0.358-0.019-0.716-0.019-1.074,0c-5.474,0.297-9.672,4.975-9.375,10.449v104.49c-0.019,0.358-0.019,0.716,0,1.074\nc0.297,5.474,4.975,9.672,10.449,9.375h227.265c0.358,0.019,0.716,0.019,1.074,0C417.585,292.29,421.782,287.611,421.486,282.137\nz M400.588,271.688H194.22v-83.592h206.367V271.688z\"/>\n<path d=\"M369.241,344.831c0.019-0.358,0.019-0.716,0-1.074c-0.297-5.474-4.975-9.672-10.449-9.375h-175.02\nc-0.358-0.019-0.716-0.019-1.074,0c-5.474,0.297-9.672,4.975-9.375,10.449v104.49c-0.019,0.358-0.019,0.716,0,1.074\nc0.297,5.474,4.975,9.672,10.449,9.375h175.02c0.358,0.019,0.716,0.019,1.074,0c5.474-0.297,9.672-4.975,9.375-10.449V344.831z\nM348.343,438.872H194.22V355.28h154.122V438.872z\"/>\n<path d=\"M129.384,46.565c-5.482-24.497-29.785-39.912-54.282-34.429C54.356,16.778,39.6,35.181,39.575,56.439\nc-0.533,21.12,13.888,39.692,34.482,44.408v84.637c-24.526,5.352-40.07,29.572-34.718,54.098\nc3.789,17.365,17.353,30.929,34.718,34.718v84.637c-20.594,4.716-35.015,23.288-34.482,44.408\nc0.029,25.103,20.402,45.43,45.505,45.401c25.103-0.029,45.43-20.402,45.401-45.505c-0.024-21.259-14.781-39.661-35.526-44.304\nV274.3c20.688-4.684,35.281-23.199,35.004-44.408c0.277-21.21-14.316-39.724-35.004-44.408v-84.637\nC119.452,95.365,134.867,71.062,129.384,46.565z M110.106,403.345c-0.284,13.645-11.429,24.558-25.078,24.555\nc-13.561,0-24.555-10.994-24.555-24.555c0-13.561,10.994-24.555,24.555-24.555C98.677,378.787,109.822,389.7,110.106,403.345z\nM109.599,229.877c0.009,13.561-10.978,24.562-24.539,24.571c-0.01,0-0.021,0-0.031,0c-13.357-0.284-24.036-11.195-24.033-24.555\nc-0.003-13.36,10.676-24.271,24.033-24.555C98.59,205.329,109.591,216.315,109.599,229.877z M85.028,80.994\nC71.671,80.71,60.993,69.799,60.996,56.439c-0.003-13.36,10.676-24.271,24.033-24.555c13.648-0.003,24.793,10.91,25.078,24.555\nC109.822,70.085,98.677,80.997,85.028,80.994z\"/>\n<path d=\"M215.118,57.484H275.2c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449h-60.082\nc-5.771,0-10.449,4.678-10.449,10.449S209.347,57.484,215.118,57.484z\"/>\n<path d=\"M327.445,67.933H215.118c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h112.327\nc5.771,0,10.449-4.678,10.449-10.449S333.216,67.933,327.445,67.933z\"/>\n<path d=\"M215.118,224.668H275.2c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449h-60.082\nc-5.771,0-10.449,4.678-10.449,10.449S209.347,224.668,215.118,224.668z\"/>\n<path d=\"M215.118,256.015h112.327c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H215.118\nc-5.771,0-10.449,4.678-10.449,10.449S209.347,256.015,215.118,256.015z\"/>\n<path d=\"M215.118,391.852H275.2c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449h-60.082\nc-5.771,0-10.449,4.678-10.449,10.449S209.347,391.852,215.118,391.852z\"/>\n<path d=\"M215.118,423.198h112.327c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H215.118\nc-5.771,0-10.449,4.678-10.449,10.449S209.347,423.198,215.118,423.198z\"/>\n</symbol>\n<symbol id=\"arrowDown\" viewBox=\"0 0 192.701 192.701\">\n<path d=\"M171.955,88.526l-75.61,74.528l-75.61-74.54c-4.74-4.704-12.439-4.704-17.179,0c-4.74,4.704-4.74,12.319,0,17.011\nl84.2,82.997c4.559,4.511,12.608,4.535,17.191,0l84.2-83.009c4.74-4.692,4.74-12.319,0-17.011\nC184.394,83.823,176.695,83.823,171.955,88.526z\"/>\n<path d=\"M87.755,104.322c4.559,4.511,12.608,4.535,17.191,0l84.2-82.997c4.74-4.704,4.74-12.319,0-17.011\nc-4.74-4.704-12.439-4.704-17.179,0L96.345,78.842L20.734,4.314c-4.74-4.704-12.439-4.704-17.179,0\nc-4.74,4.704-4.74,12.319,0,17.011L87.755,104.322z\"/>\n</symbol>\n<symbol id=\"contract\" viewBox=\"0 0 512 512\">\n<path d=\"M389.513,87.422c0-12.012-4.688-23.32-13.184-31.816l-42.422-42.422C325.529,4.805,313.636,0,301.8,0h-2.578v90h90.292\nL389.513,87.422L389.513,87.422z\"/>\n<path d=\"M273.937,309.537c2.871-8.716,7.881-16.831,14.414-23.408l101.562-101.153V120h-105.4c-8.291,0-14.513-6.709-14.513-15V0\nH45C20.186,0,0,20.186,0,45v422c0,24.814,20.186,45,45,45h299.513c24.814,0,45.4-20.186,45.4-45V355.049l-16.484,16.084\nc-6.679,6.621-14.501,11.44-23.32,14.385l-47.695,15.923l-7.266,0.396c-12.012,0-23.379-5.845-30.439-15.63\nc-7.002-9.741-8.906-22.368-5.098-33.779L273.937,309.537z M75,270h149.513c8.291,0,15,6.709,15,15c0,8.291-6.709,15-15,15H75\nc-8.291,0-15-6.709-15-15C60,276.709,66.709,270,75,270z M60,225c0-8.291,6.709-15,15-15h149.513c8.291,0,15,6.709,15,15\ns-6.709,15-15,15H75C66.709,240,60,233.291,60,225z M60,345c0-8.291,6.709-15,15-15h149.513c8.291,0,15,6.709,15,15\nc0,8.291-6.709,15-15,15H75C66.709,360,60,353.291,60,345z M284.513,420c8.291,0,15,6.709,15,15c0,8.291-6.708,15-15,15h-90\nc-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15H284.513z M75,180c-8.291,0-15-6.709-15-15s6.709-15,15-15h209.513\nc8.291,0,15,6.709,15,15s-6.709,15-15,15H75z\"/>\n<path d=\"M301.111,322.808l-13.05,39.151c-1.956,5.865,3.625,11.444,9.49,9.485l39.128-13.068L301.111,322.808z\"/>\n<path d=\"M417.609,199.307l-98.789,98.789l42.605,42.605c22.328-22.332,65.773-65.783,98.784-98.794L417.609,199.307z\"/>\n<path d=\"M503.185,156.284c-5.273-5.303-13.037-8.335-21.27-8.335c-8.233,0-15.996,3.032-21.299,8.35l-21.797,21.797l42.598,42.598\nc11.933-11.934,20.181-20.182,21.799-21.799C514.933,187.16,514.932,168.046,503.185,156.284z\"/>\n<path d=\"M503.215,198.896c0.001,0,0.001-0.001,0.002-0.002c0.038-0.038,0.055-0.055,0.086-0.086\nC503.272,198.84,503.255,198.857,503.215,198.896z\"/>\n<path d=\"M503.303,198.808c0.048-0.048,0.104-0.104,0.133-0.133C503.406,198.705,503.351,198.76,503.303,198.808z\"/>\n<path d=\"M503.436,198.675C503.533,198.578,503.535,198.576,503.436,198.675L503.436,198.675z\"/>\n</symbol>\n<symbol id=\"handshake\" viewBox=\"0 0 512 512\">\n<path d=\"M123.733,130.133c-17.067-17.067-89.6-21.333-113.067-23.467c-2.133,0-4.267,0-6.4,2.133C2.133,110.933,0,115.2,0,117.333\nv192C0,315.733,4.267,320,10.667,320h64c4.267,0,8.533-2.133,10.667-6.4c0-6.4,38.4-119.467,42.667-174.933\nC128,136.533,128,132.267,123.733,130.133z\"/>\n<path d=\"M352,181.333c-21.333-6.4-40.533-14.933-57.6-21.333c-38.4-17.067-55.467-8.533-89.6,25.6\nc-14.933,14.933-25.6,36.267-23.467,44.8c0,2.133,0,2.133,4.267,4.267c10.667,4.267,25.6,6.4,40.533-17.067\nc2.133-2.133,4.267-4.267,8.533-4.267c6.4,0,8.533-2.133,14.933-4.267c4.267-2.133,8.533-4.267,14.933-6.4\nc2.133,0,2.133,0,4.267,0c2.133,0,6.4,2.133,8.533,2.133C288,215.467,307.2,230.4,326.4,247.467\nc29.867,23.467,59.733,49.067,74.667,68.267h2.133C388.267,273.067,362.667,200.533,352,181.333z\"/>\n<path d=\"M501.333,128c-83.2,0-130.133,21.333-132.267,21.333c-2.133,2.133-4.267,4.267-6.4,6.4c0,2.133,0,6.4,2.133,8.533\nc12.8,21.333,55.467,138.667,61.867,168.533c2.133,4.267,6.4,8.533,10.667,8.533h64c6.4,0,10.667-4.267,10.667-10.667v-192\nC512,132.267,507.733,128,501.333,128z\"/>\n<path d=\"M386.133,337.067c-8.533-19.2-44.8-46.933-76.8-72.533C292.267,249.6,275.2,236.8,262.4,226.133\nc-2.133,2.133-6.4,2.133-6.4,4.267c-6.4,2.133-8.533,4.267-17.067,4.267C221.867,256,200.533,264.533,177.067,256\nc-10.667-2.133-17.067-10.667-19.2-19.2c-4.267-21.333,14.933-51.2,29.867-66.133h-42.667c-8.533,42.667-23.467,98.133-34.133,128\nc8.533,8.533,17.067,19.2,23.467,23.467c40.533,34.133,87.467,68.267,96,74.667c6.4,4.267,19.2,8.533,25.6,8.533\nc2.133,0,4.267,0,6.4,0L228.267,371.2c-4.267-4.267-4.267-10.667,0-14.933s10.667-4.267,14.933,0l42.667,42.667\nc4.267,4.267,8.533,2.133,12.8,2.133c6.4-2.133,8.533-6.4,10.667-12.8L260.267,339.2c-4.267-4.267-4.267-10.667,0-14.933\ns10.667-4.267,14.933,0l53.333,53.333c2.133,2.133,10.667,2.133,17.067,0c2.133-2.133,6.4-4.267,8.533-8.533L294.4,309.333\nc-4.267-4.267-4.267-10.667,0-14.933s10.667-4.267,14.933,0l61.867,61.867c4.267,2.133,8.533,0,12.8-2.133\nC386.133,352,390.4,345.6,386.133,337.067z\"/>\n</symbol>\n<symbol id=\"searching-person\" viewBox=\"0 0 462.406 462.406\">\n<path d=\"M251.361,163.465c0,33.803-27.396,61.2-61.2,61.2c-33.803,0-61.2-27.397-61.2-61.2s27.397-61.2,61.2-61.2\nC223.958,102.265,251.361,129.669,251.361,163.465z M450.453,450.453c-7.963,7.969-18.408,11.953-28.846,11.953\nc-10.439,0-20.883-3.984-28.846-11.953c0,0-103.918-104.027-104.74-105.047c-29.078,18.557-63.587,29.355-100.641,29.355\nC83.892,374.762,0,290.869,0,187.381C0,83.892,83.898,0,187.381,0s187.381,83.892,187.381,187.38\nc0,37.053-10.799,71.563-29.355,100.641c1.02,0.814,105.047,104.74,105.047,104.74C466.391,408.688,466.391,434.52,450.453,450.453\nz M335.723,187.38c0-81.926-66.416-148.342-148.342-148.342S39.039,105.454,39.039,187.38c0,47.28,22.147,89.366,56.603,116.532\nc4.481-33.211,32.872-58.84,67.313-58.84h54.4c33.028,0,60.534,23.555,66.694,54.773\nC315.67,272.639,335.723,232.363,335.723,187.38z\"/>\n</symbol>\n\n<symbol id=\"form-pencil\" viewBox=\"0 0 53 53\">\n\t<path d=\"M53,21.941v17c0,0.276-0.224,0.5-0.5,0.5h-52c-0.276,0-0.5-0.224-0.5-0.5v-16.5\n\t\tc0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v16h51v-16H23c-0.276,0-0.5-0.224-0.5-0.5c0-0.276,0.224-0.5,0.5-0.5h29.5\n\t\tC52.776,21.441,53,21.665,53,21.941z M15.552,31.586l4.597-4.536c0.144-0.141,0.358-0.182,0.544-0.105\n\t\tC20.879,27.023,21,27.204,21,27.406v4.535c0,0.276-0.224,0.5-0.5,0.5h-4.597c-0.203,0-0.386-0.123-0.462-0.311\n\t\tC15.363,31.943,15.407,31.727,15.552,31.586z M17.122,31.441H20v-2.839L17.122,31.441z M2.203,18.655\n\t\tc-0.094-0.094-0.146-0.221-0.146-0.354s0.053-0.26,0.146-0.354l4.243-4.242c0.195-0.195,0.512-0.195,0.707,0l1.414,1.414\n\t\tc0.094,0.094,0.146,0.221,0.146,0.354s-0.053,0.26-0.146,0.354l-4.243,4.242c-0.098,0.098-0.226,0.146-0.354,0.146\n\t\ts-0.256-0.049-0.354-0.146L2.203,18.655z M3.263,18.302l0.707,0.707l3.536-3.535l-0.707-0.707L3.263,18.302z M5.03,20.777\n\t\tl4.243-4.243c0.188-0.188,0.52-0.188,0.707,0l9.192,9.192c0.195,0.195,0.195,0.512,0,0.707l-4.243,4.243\n\t\tc-0.098,0.098-0.226,0.146-0.354,0.146s-0.256-0.049-0.354-0.146l-9.192-9.192c-0.094-0.094-0.146-0.221-0.146-0.354\n\t\tS4.937,20.871,5.03,20.777z M6.091,21.131l8.485,8.485l3.536-3.536l-8.485-8.485L6.091,21.131z\"/>\n</symbol>\n\n\n<symbol id=\"dribble\" viewBox=\"0 0 1000 1000\">\n<path d=\"M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z\"/>\n</symbol>\n\n</svg>";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["static/js/LoadJS.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = (function() {
var output = "";
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./app.js", false, "static/js/LoadJS.njk", false, function(t_3,t_2) {
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
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./dropdown.js", false, "static/js/LoadJS.njk", false, function(t_7,t_6) {
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
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./drawer.js", false, "static/js/LoadJS.njk", false, function(t_11,t_10) {
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
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./accordion.js", false, "static/js/LoadJS.njk", false, function(t_15,t_14) {
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
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./current-year.js", false, "static/js/LoadJS.njk", false, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
callback(null,t_18);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
callback(null,t_20);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
})})})})});
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
output += "\n<script>\n";
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

