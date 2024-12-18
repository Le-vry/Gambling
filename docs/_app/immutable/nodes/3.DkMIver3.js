import{s as G,h as U,n as M,r as Q,c as J,o as V,d as Y}from"../chunks/scheduler.c61x3f7M.js";import{S as X,i as Z,e as D,s as T,c as P,a as q,k as L,f as H,d as A,l as x,g as O,h as k,o as $,p as ee,r as te,t as oe,b as ae,q as j,j as se}from"../chunks/index.CbmhN0cM.js";import{e as F}from"../chunks/each.D6YF6ztN.js";import{g as re}from"../chunks/_commonjsHelpers.CqkleIqs.js";import{p as ne,i as ie,a as le}from"../chunks/entry.DSx_gftA.js";import{w as ue}from"../chunks/paths.B4Xz0-IY.js";var E={};E.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];E.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];E.elizaQuits=["bye","goodbye","done","exit","quit"];E.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];E.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];E.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};E.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];E.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var n=E;function p(e){this.noRandom=!!e,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}p.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var e=0;e<n.elizaKeywords.length;e++){this.lastchoice[e]=[];for(var t=n.elizaKeywords[e][2],o=0;o<t.length;o++)this.lastchoice[e][o]=-1}};p.prototype._dataParsed=!1;p.prototype._init=function(){var e={};if(n.elizaSynons&&typeof n.elizaSynons=="object")for(var t in n.elizaSynons)e[t]="("+t+"|"+n.elizaSynons[t].join("|")+")";(!n.elizaKeywords||typeof n.elizaKeywords.length>"u")&&(n.elizaKeywords=[["###",0,[["###",[]]]]]);for(var o=/@(\S+)/,i=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,y=/(\S)\s*\*\s*$/,s=/^\s*\*\s*$/,d=/\s+/g,l=0;l<n.elizaKeywords.length;l++){var m=n.elizaKeywords[l][2];n.elizaKeywords[l][3]=l;for(var t=0;t<m.length;t++){var u=m[t];if(u[0].charAt(0)=="$"){for(var c=1;u[0].charAt[c]==" ";)c++;u[0]=u[0].substring(c),u[2]=!0}else u[2]=!1;for(var r=o.exec(u[0]);r;){var I=e[r[1]]?e[r[1]]:r[1];u[0]=u[0].substring(0,r.index)+I+u[0].substring(r.index+r[0].length),r=o.exec(u[0])}if(s.test(u[0]))u[0]="\\s*(.*)\\s*";else{if(r=i.exec(u[0]),r){for(var h="",g=u[0];r;)h+=g.substring(0,r.index+1),r[1]!=")"&&(h+="\\b"),h+="\\s*(.*)\\s*",r[2]!="("&&r[2]!="\\"&&(h+="\\b"),h+=r[2],g=g.substring(r.index+r[0].length),r=i.exec(g);u[0]=h+g}if(r=a.exec(u[0]),r){var h="\\s*(.*)\\s*";r[1]!=")"&&r[1]!="\\"&&(h+="\\b"),u[0]=h+u[0].substring(r.index-1+r[0].length)}if(r=y.exec(u[0]),r){var h=u[0].substring(0,r.index+1);r[1]!="("&&(h+="\\b"),u[0]=h+"\\s*(.*)\\s*"}}u[0]=u[0].replace(d,"\\s+"),d.lastIndex=0}}if(n.elizaKeywords.sort(this._sortKeywords),p.prototype.pres={},p.prototype.posts={},n.elizaPres&&n.elizaPres.length){for(var z=new Array,t=0;t<n.elizaPres.length;t+=2)z.push(n.elizaPres[t]),p.prototype.pres[n.elizaPres[t]]=n.elizaPres[t+1];p.prototype.preExp=new RegExp("\\b("+z.join("|")+")\\b")}else p.prototype.preExp=/####/,p.prototype.pres["####"]="####";if(n.elizaPosts&&n.elizaPosts.length){for(var z=new Array,t=0;t<n.elizaPosts.length;t+=2)z.push(n.elizaPosts[t]),p.prototype.posts[n.elizaPosts[t]]=n.elizaPosts[t+1];p.prototype.postExp=new RegExp("\\b("+z.join("|")+")\\b")}else p.prototype.postExp=/####/,p.prototype.posts["####"]="####";(!n.elizaQuits||typeof n.elizaQuits.length>"u")&&(n.elizaQuits=[]),p.prototype._dataParsed=!0};p.prototype._sortKeywords=function(e,t){return e[1]>t[1]?-1:e[1]<t[1]||e[3]>t[3]?1:e[3]<t[3]?-1:0};p.prototype.transform=function(e){var t="";this.quit=!1,e=e.toLowerCase(),e=e.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),e=e.replace(/\s+-+\s+/g,"."),e=e.replace(/\s*[,\.\?!;]+\s*/g,"."),e=e.replace(/\s*\bbut\b\s*/g,"."),e=e.replace(/\s{2,}/g," ");for(var o=e.split("."),i=0;i<o.length;i++){var a=o[i];if(a!=""){for(var y=0;y<n.elizaQuits.length;y++)if(n.elizaQuits[y]==a)return this.quit=!0,this.getFinal();var s=this.preExp.exec(a);if(s){for(var d="",l=a;s;)d+=l.substring(0,s.index)+this.pres[s[1]],l=l.substring(s.index+s[0].length),s=this.preExp.exec(l);a=d+l}this.sentence=a;for(var m=0;m<n.elizaKeywords.length;m++)if(a.search(new RegExp("\\b"+n.elizaKeywords[m][0]+"\\b","i"))>=0&&(t=this._execRule(m)),t!="")return t}}if(t=this._memGet(),t==""){this.sentence=" ";var m=this._getRuleIndexByKey("xnone");m>=0&&(t=this._execRule(m))}return t!=""?t:"I am at a loss for words."};p.prototype._execRule=function(e){for(var t=n.elizaKeywords[e],o=t[2],i=/\(([0-9]+)\)/,a=0;a<o.length;a++){var y=this.sentence.match(o[a][0]);if(y!=null){var s=o[a][1],d=o[a][2],l=this.noRandom?0:Math.floor(Math.random()*s.length);this.noRandom&&this.lastchoice[e][a]>l||this.lastchoice[e][a]==l?(l=++this.lastchoice[e][a],l>=s.length&&(l=0,this.lastchoice[e][a]=-1)):this.lastchoice[e][a]=l;var m=s[l];if(this.debug&&alert(`match:
key: `+n.elizaKeywords[e][0]+`
rank: `+n.elizaKeywords[e][1]+`
decomp: `+o[a][0]+`
reasmb: `+m+`
memflag: `+d),m.search("^goto ","i")==0){var u=this._getRuleIndexByKey(m.substring(5));if(u>=0)return this._execRule(u)}var c=i.exec(m);if(c){for(var r="",I=m;c;){var h=y[parseInt(c[1])],g=this.postExp.exec(h);if(g){for(var z="",W=h;g;)z+=W.substring(0,g.index)+this.posts[g[1]],W=W.substring(g.index+g[0].length),g=this.postExp.exec(W);h=z+W}r+=I.substring(0,c.index)+h,I=I.substring(c.index+c[0].length),c=i.exec(I)}m=r+I}if(m=this._postTransform(m),d)this._memSave(m);else return m}}return""};p.prototype._postTransform=function(e){if(e=e.replace(/\s{2,}/g," "),e=e.replace(/\s+\./g,"."),n.elizaPostTransforms&&n.elizaPostTransforms.length)for(var t=0;t<n.elizaPostTransforms.length;t+=2)e=e.replace(n.elizaPostTransforms[t],n.elizaPostTransforms[t+1]),n.elizaPostTransforms[t].lastIndex=0;if(this.capitalizeFirstLetter){var o=/^([a-z])/,i=o.exec(e);i&&(e=i[0].toUpperCase()+e.substring(1))}return e};p.prototype._getRuleIndexByKey=function(e){for(var t=0;t<n.elizaKeywords.length;t++)if(n.elizaKeywords[t][0]==e)return t;return-1};p.prototype._memSave=function(e){this.mem.push(e),this.mem.length>this.memSize&&this.mem.shift()};p.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var e=Math.floor(Math.random()*this.mem.length),t=this.mem[e],o=e+1;o<this.mem.length;o++)this.mem[o-1]=this.mem[o];return this.mem.length--,t}else return""};p.prototype.getFinal=function(){return n.elizaFinals?n.elizaFinals[Math.floor(Math.random()*n.elizaFinals.length)]:""};p.prototype.getInitial=function(){return n.elizaInitials?n.elizaInitials[Math.floor(Math.random()*n.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(e){return this[this.length]=e});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var e=this[0],t=1;t<this.length;t++)this[t-1]=this[t];return this.length--,e});var he=p;const ye=re(he);function de(e){const t=JSON.parse(e);return t.data&&(t.data=ne(t.data)),t}function K(e){return HTMLElement.prototype.cloneNode.call(e)}function ce(e,t=()=>{}){const o=async({action:a,result:y,reset:s=!0,invalidateAll:d=!0})=>{y.type==="success"&&(s&&HTMLFormElement.prototype.reset.call(e),d&&await ie()),(location.origin+location.pathname===a.origin+a.pathname||y.type==="redirect"||y.type==="error")&&le(y)};async function i(a){var g,z,W,v,b;if(((g=a.submitter)!=null&&g.hasAttribute("formmethod")?a.submitter.formMethod:K(e).method)!=="post")return;a.preventDefault();const s=new URL((z=a.submitter)!=null&&z.hasAttribute("formaction")?a.submitter.formAction:K(e).action),d=(W=a.submitter)!=null&&W.hasAttribute("formenctype")?a.submitter.formEnctype:K(e).enctype,l=new FormData(e),m=(v=a.submitter)==null?void 0:v.getAttribute("name");m&&l.append(m,((b=a.submitter)==null?void 0:b.getAttribute("value"))??"");const u=new AbortController;let c=!1;const I=await t({action:s,cancel:()=>c=!0,controller:u,formData:l,formElement:e,submitter:a.submitter})??o;if(c)return;let h;try{const w=new Headers({accept:"application/json","x-sveltekit-action":"true"});d!=="multipart/form-data"&&w.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(d)?d:"application/x-www-form-urlencoded");const f=d==="multipart/form-data"?l:new URLSearchParams(l),_=await fetch(s,{method:"POST",headers:w,cache:"no-store",body:f,signal:u.signal});h=de(await _.text()),h.type==="error"&&(h.status=_.status)}catch(w){if((w==null?void 0:w.name)==="AbortError")return;h={type:"error",error:w}}I({action:s,formData:l,formElement:e,update:w=>o({action:s,result:h,reset:w==null?void 0:w.reset,invalidateAll:w==null?void 0:w.invalidateAll}),result:h})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",i),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",i)}}}const me=(window==null?void 0:window.localStorage.getItem("savedchat"))??"",C=ue(me);C.subscribe(e=>{window==null||window.localStorage.setItem("savedchat",e)});function B(e,t,o){const i=e.slice();return i[8]=t[o],i}function N(e){let t,o,i=e[8].message+"",a;return{c(){t=D("article"),o=D("p"),a=oe(i),this.h()},l(y){t=P(y,"ARTICLE",{class:!0});var s=q(t);o=P(s,"P",{});var d=q(o);a=ae(d,i),d.forEach(A),s.forEach(A),this.h()},h(){x(t,"class","svelte-rxwqq0"),j(t,"admin",e[8].user=="Admin")},m(y,s){O(y,t,s),k(t,o),k(o,a)},p(y,s){s&1&&i!==(i=y[8].message+"")&&se(a,i),s&1&&j(t,"admin",y[8].user=="Admin")},d(y){y&&A(t)}}}function fe(e){let t,o,i,a="Elizabot",y,s,d,l,m='<span class="circle svelte-rxwqq0"></span> <span class="circle svelte-rxwqq0"></span> <span class="circle svelte-rxwqq0"></span>',u,c,r,I,h,g,z,W=F(e[0]),v=[];for(let b=0;b<W.length;b+=1)v[b]=N(B(e,W,b));return{c(){t=D("main"),o=D("div"),i=D("h1"),i.textContent=a,y=T(),s=D("section");for(let b=0;b<v.length;b+=1)v[b].c();d=T(),l=D("article"),l.innerHTML=m,u=T(),c=D("form"),r=D("input"),I=T(),h=D("input"),this.h()},l(b){t=P(b,"MAIN",{class:!0});var w=q(t);o=P(w,"DIV",{class:!0});var f=q(o);i=P(f,"H1",{class:!0,"data-svelte-h":!0}),L(i)!=="svelte-1xj3d7u"&&(i.textContent=a),y=H(f),s=P(f,"SECTION",{class:!0});var _=q(s);for(let R=0;R<v.length;R+=1)v[R].l(_);d=H(_),l=P(_,"ARTICLE",{id:!0,class:!0,"data-svelte-h":!0}),L(l)!=="svelte-1ixtjr6"&&(l.innerHTML=m),_.forEach(A),u=H(f),c=P(f,"FORM",{method:!0,class:!0});var S=q(c);r=P(S,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),I=H(S),h=P(S,"INPUT",{type:!0,class:!0}),S.forEach(A),f.forEach(A),w.forEach(A),this.h()},h(){x(i,"class","svelte-rxwqq0"),x(l,"id","visible"),x(l,"class","svelte-rxwqq0"),x(s,"class","svelte-rxwqq0"),x(r,"type","text"),x(r,"name","User-input"),r.value=pe,x(r,"placeholder","Message Eliza!"),r.required=!0,x(r,"class","svelte-rxwqq0"),x(h,"type","button"),h.value="↺",x(h,"class","svelte-rxwqq0"),x(c,"method","post"),x(c,"class","svelte-rxwqq0"),x(o,"class","Chat-container svelte-rxwqq0"),x(t,"class","svelte-rxwqq0")},m(b,w){O(b,t,w),k(t,o),k(o,i),k(o,y),k(o,s);for(let f=0;f<v.length;f+=1)v[f]&&v[f].m(s,null);k(s,d),k(s,l),k(o,u),k(o,c),k(c,r),k(c,I),k(c,h),g||(z=[$(h,"click",ee(e[2])),U(ce.call(null,c,e[5]))],g=!0)},p(b,[w]){if(w&1){W=F(b[0]);let f;for(f=0;f<W.length;f+=1){const _=B(b,W,f);v[f]?v[f].p(_,w):(v[f]=N(_),v[f].c(),v[f].m(s,d))}for(;f<v.length;f+=1)v[f].d(1);v.length=W.length}},i:M,o:M,d(b){b&&A(t),te(v,b),g=!1,Q(z)}}}let pe="";function ge(e,t,o){let i;J(e,C,c=>o(6,i=c)),V(()=>{i.length>2&&o(0,s=JSON.parse(i))});let a=[];const y=new ye;let s=[{user:"Eliza",message:y.getInitial()}],d=!1;async function l(c){o(0,s=[...s,{user:"Admin",message:c}]),o(0,s),o(4,d),o(3,a);var r=document.getElementById("visible");r.style.display="flex",await new Promise(I=>setTimeout(I,1e3+Math.random()*1e3)),o(0,s=[...s,{user:"Eliza",message:y.transform(c)}]),o(0,s),o(4,d),o(3,a);var r=document.getElementById("visible");r.style.display="none",o(3,a=s),Y(C,i=JSON.stringify(a),i)}function m(){o(4,d=!0)}const u=({formElement:c,formData:r,action:I,cancel:h})=>{h();const g=r.get("User-input");l(g)};return e.$$.update=()=>{e.$$.dirty&25&&d===!0&&(o(0,s=[{user:"Eliza",message:y.getInitial()}]),o(0,s),o(4,d),o(3,a),o(3,a=s),Y(C,i=JSON.stringify(a),i),o(4,d=!1))},[s,l,m,a,d,u]}class ze extends X{constructor(t){super(),Z(this,t,ge,fe,G,{})}}export{ze as component};