(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6SKC":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("4Ait"),a=i("fXoL");let n=(()=>{class e{transform(e=0,t){return isNaN(parseFloat(String(e)))||!isFinite(e)?"-":Object(r.a)(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=a.Qb({name:"formattedFileSize",type:e,pure:!0}),e})()},"8k5P":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("WmcL"),a=i("fXoL"),n=i("VaLf");let o=(()=>{class e{constructor(e){this.i18n=e}getFullPlanName(){if(!this.plan)return;let e=this.plan.parent?this.plan.parent.name:this.plan.name;return e=Object(r.a)(this.i18n.t(e)),e+=" "+this.i18n.t("Plan"),this.plan.parent&&(e+=": "+this.plan.name),e}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(n.a))},e.\u0275cmp=a.Lb({type:e,selectors:[["full-plan-name"]],inputs:{plan:"plan"},decls:1,vars:1,template:function(e,t){1&e&&a.Mc(0),2&e&&a.Nc(t.getFullPlanName())},encapsulation:2,changeDetection:0}),e})()},NjxG:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i("fXoL"),a=i("kmQS"),n=i("tyNb");let o=(()=>{class e{constructor(e,t){this.settings=e,this.router=t}canActivate(e,t){return this.handle()}canActivateChild(e,t){return this.handle()}handle(){return!(!this.settings.get("billing.integrated")||!this.settings.get("billing.enable"))||(this.router.navigate(["/"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(r.bc(a.a),r.bc(n.e))},e.\u0275prov=r.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},QibW:function(e,t,i){"use strict";i.d(t,"a",(function(){return k})),i.d(t,"b",(function(){return _})),i.d(t,"c",(function(){return y}));var r=i("fXoL"),a=i("FKr1"),n=i("8LU1"),o=i("3Pt+"),s=i("R1ws"),l=i("u47x"),c=i("0EQZ");const d=["input"],u=function(){return{enterDuration:150}},h=["*"],p=new r.r("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let b=0;const m={provide:o.r,useExisting:Object(r.V)(()=>_),multi:!0};class g{constructor(e,t){this.source=e,this.value=t}}let _=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name=`mat-radio-group-${b++}`,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new r.o}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(n.c)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=Object(n.c)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new g(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(r.h))},e.\u0275dir=r.Mb({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){var a;1&e&&r.Jb(i,k,!0),2&e&&r.xc(a=r.gc())&&(t._radios=a)},hostAttrs:["role","radiogroup",1,"mat-radio-group"],inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[r.Cb([m])]}),e})();class f{constructor(e){this._elementRef=e}}const v=Object(a.y)(Object(a.C)(f));let k=(()=>{class e extends v{constructor(e,t,i,a,n,o,s){super(t),this._changeDetector=i,this._focusMonitor=a,this._radioDispatcher=n,this._animationMode=o,this._providerOverride=s,this._uniqueId=`mat-radio-${++b}`,this.id=this._uniqueId,this.change=new r.o,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._removeUniqueSelectionListener=n.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=Object(n.c)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled(Object(n.c)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=Object(n.c)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new g(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(_,8),r.Rb(r.l),r.Rb(r.h),r.Rb(l.h),r.Rb(c.d),r.Rb(s.a,8),r.Rb(p,8))},e.\u0275cmp=r.Lb({type:e,selectors:[["mat-radio-button"]],viewQuery:function(e,t){var i;1&e&&r.Sc(d,!0),2&e&&r.xc(i=r.gc())&&(t._inputElement=i.first)},hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&r.fc("focus",(function(){return t._inputElement.nativeElement.focus()})),2&e&&(r.Eb("tabindex",-1)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),r.Hb("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex",id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},exportAs:["matRadioButton"],features:[r.Ab],ngContentSelectors:h,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(r.pc(),r.Xb(0,"label",0,1),r.Xb(2,"div",2),r.Sb(3,"div",3),r.Sb(4,"div",4),r.Xb(5,"input",5,6),r.fc("change",(function(e){return t._onInputChange(e)}))("click",(function(e){return t._onInputClick(e)})),r.Wb(),r.Xb(7,"div",7),r.Sb(8,"div",8),r.Wb(),r.Wb(),r.Xb(9,"div",9),r.Xb(10,"span",10),r.Mc(11,"\xa0"),r.Wb(),r.oc(12),r.Wb(),r.Wb()),2&e){const e=r.yc(1);r.Eb("for",t.inputId),r.Db(5),r.qc("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),r.Eb("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),r.Db(2),r.qc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",r.tc(18,u)),r.Db(2),r.Hb("mat-radio-label-before","before"==t.labelPosition)}},directives:[a.s],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({factory:function(t){return new(t||e)},imports:[[a.t,a.i],a.i]}),e})()},Y7pB:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}));var r=i("fXoL"),a=i("LRXf");const n="billing-plan";let o=(()=>{class e{constructor(e){this.http=e}all(e){return this.http.get(n,e)}get(e){return this.http.get(`${n}/${e}`)}create(e){return this.http.post(n,e)}update(e,t){return this.http.put(`${n}/${e}`,t)}delete(e){return this.http.delete(`${n}/${e.ids}`)}sync(){return this.http.post(`${n}/sync`)}}return e.\u0275fac=function(t){return new(t||e)(r.bc(a.a))},e.\u0275prov=r.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},h4Ec:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("fXoL");let a=(()=>{class e{}return e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({factory:function(t){return new(t||e)}}),e})()},uHcB:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("fXoL"),a=i("LRXf");let n=(()=>{class e{constructor(e){this.http=e}all(e){return this.http.get("billing/subscriptions",e)}get(e){return this.http.get("billing/subscriptions/"+e)}createOnStripe(e){return this.http.post("billing/subscriptions/stripe",e)}update(e,t){return this.http.put("billing/subscriptions/"+e,t)}create(e){return this.http.post("billing/subscriptions",e)}cancel(e,t){return this.http.delete("billing/subscriptions/"+e,t)}resume(e){return this.http.post("billing/subscriptions/"+e+"/resume")}changePlan(e,t){return this.http.post("billing/subscriptions/"+e+"/change-plan",{newPlanId:t.id})}addCard(e){return this.http.post("billing/stripe/cards/add",{token:e})}}return e.\u0275fac=function(t){return new(t||e)(r.bc(a.a))},e.\u0275prov=r.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
//# sourceMappingURL=2-es2015.502c1fca16d64032242c.js.map