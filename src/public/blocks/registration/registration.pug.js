function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function registrationTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug":"html\nbody\n    .ui.one.column.centered.grid.registration\n        .ui.card.registration\n            .content.left.aligned\n                .header Registration\n                .description\n                    form.ui.form.formWithValidation\n                        .field\n                            label Email\n                            input(type=\"text\", name=\"email\", placeholder=\"Email\")\n                        .field\n                            label Login\n                            input(type=\"text\", name=\"login\", placeholder=\"Login\")\n                        .field\n                            label Password\n                            input(type=\"password\", name=\"password\", placeholder=\"Password\")\n                        .field\n                            label Repeat password\n                            input(type=\"password\", name=\"repeatedPassword\", placeholder=\"Repeat password\")\n                        .field\n                            .ui.checkbox\n                                input(type=\"checkbox\", name=\"conditions\", tabindex=\"0\")\n                                label I agree to the Terms and Conditions\n                        button.ui.positive.button.validateBtn(type=\"submit\") Register\n"};
;pug_debug_line = 1;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Chtml\u003E\u003C\u002Fhtml\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui one column centered grid registration\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui card registration\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"content left aligned\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "Registration\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cform class=\"ui form formWithValidation\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "Email\u003C\u002Flabel\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cinput type=\"text\" name=\"email\" placeholder=\"Email\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "Login\u003C\u002Flabel\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cinput type=\"text\" name=\"login\" placeholder=\"Login\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 16;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "Password\u003C\u002Flabel\u003E";
;pug_debug_line = 17;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" name=\"password\" placeholder=\"Password\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 19;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 19;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "Repeat password\u003C\u002Flabel\u003E";
;pug_debug_line = 20;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cinput type=\"password\" name=\"repeatedPassword\" placeholder=\"Repeat password\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
;pug_debug_line = 22;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui checkbox\"\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cinput type=\"checkbox\" name=\"conditions\" tabindex=\"0\"\u002F\u003E";
;pug_debug_line = 24;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 24;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "I agree to the Terms and Conditions\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "\u003Cbutton class=\"ui positive button validateBtn\" type=\"submit\"\u003E";
;pug_debug_line = 25;pug_debug_filename = ".\u002Fpublic\u002Fblocks\u002F\u002Fregistration\u002Fregistration.pug";
pug_html = pug_html + "Register\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}