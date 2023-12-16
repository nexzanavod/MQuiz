"use strict";(self.webpackChunkmsg_cms=self.webpackChunkmsg_cms||[]).push([[4409],{28104:(Ae,F,t)=>{t.r(F),t.d(F,{default:()=>ge});var e=t(67294),d=t(51435),a=t(86706),V=t(36364),$=t(12473),T=t(96987),G=t(74863),I=t(10574),K=t(18226),A=t(41054),b=t(36968),q=t.n(b),_=t(86896),ee=t(88767),te=t(16550),se=t(98374),oe=t(92686),ne=t(79194),ae=t(75021),g=t(11984),y=t(43390),m=t(38705),le=t(68997),re=t(85230),l=t(86978),ie=t(52258),ce=t(3848),u=t(65649),de=t(66578);function fe(){const{workflowId:E}=(0,te.UO)(),me=(0,a.v9)(V._),{formatMessage:o}=(0,_.Z)(),f=(0,a.I0)(),{put:ue}=(0,d.kY)(),{formatAPIError:we}=(0,d.So)(),k=(0,d.lm)(),{isLoading:v,meta:S,workflows:C,refetch:ve}=(0,ie.n)(),{collectionTypes:U,singleTypes:Y,isLoading:R}=(0,oe.G)(),he=(0,a.v9)(u.RR),pe=(0,a.v9)(u.bH),r=(0,a.v9)(u.DV),Z=(0,a.v9)(u.CA),j=(0,a.v9)(u.g$),h=(0,a.v9)(u.xU),{allowedActions:{canDelete:ye,canUpdate:D}}=(0,d.ss)(me.settings["review-workflows"]),[L,M]=e.useState({}),{getFeature:Ee,isLoading:z}=(0,ae.q)(),{isLoading:W,roles:H}=(0,se.F)(void 0,{retry:!1}),[X,w]=e.useState(!1),[ke,B]=e.useState(null),J=C.find(s=>s.id===parseInt(E,10)),N=C.filter(s=>s.id!==parseInt(E,10)).flatMap(s=>s.contentTypes),{mutateAsync:Se,isLoading:Ce}=(0,ee.useMutation)(async({workflow:s})=>{const{data:{data:n}}=await ue(`/admin/review-workflows/workflows/${s.id}`,{data:s});return n},{onSuccess(){k({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),Le=async s=>{B(null);try{return await Se({workflow:{...s,stages:s.stages.map(c=>{let p=!0;const P=he.workflow.stages.find(x=>x.id===c?.id);return P&&(p=P.permissions?.length!==c.permission?.length||!P.permissions.every(x=>!!c.permissions.find(Ie=>Ie.role===x.role))),{...c,permissions:p?c.permissions:void 0}})}})}catch(n){return n.response.data?.error?.name==="ValidationError"&&n.response.data?.error?.details?.errors?.length>0&&B(n.response.data?.error?.details?.errors.reduce((c,p)=>(q()(c,p.path,p.message),c),{})),k({type:"warning",message:we(n)}),null}},Q=async()=>{await Le(r),await ve(),M({})},Me=async()=>{await Q()},Te=()=>{M({})},O=(0,A.TA)({enableReinitialize:!0,initialErrors:ke,initialValues:r,async onSubmit(){const s=r.contentTypes.some(n=>N.includes(n));i?.[l.Ef]&&S?.workflowCount>parseInt(i[l.Ef],10)?w("workflow"):i?.[l._X]&&r.stages.length>parseInt(i[l._X],10)?w("stage"):Z||s?(Z&&M(n=>({...n,hasDeletedServerStages:!0})),s&&M(n=>({...n,hasReassignedContentTypes:!0}))):Q()},validate(s){return(0,de.V)({values:s,formatMessage:o})}});(0,ne.v)(l.sN,ce.I);const i=Ee("review-workflows");return e.useEffect(()=>(v||(f((0,g.fC)({workflow:J})),f((0,g.PP)({workflows:C}))),R||f((0,g.Pz)({collectionTypes:U,singleTypes:Y})),W||f((0,g.Lk)(H)),f((0,g.wt)(v||R||W)),()=>{f((0,g.Js)())}),[U,f,R,v,W,H,Y,J,C]),e.useEffect(()=>{!v&&!z&&(i?.[l.Ef]&&S?.workflowCount>parseInt(i[l.Ef],10)?w("workflow"):i?.[l._X]&&r.stages.length>parseInt(i[l._X],10)&&w("stage"))},[r.stages.length,z,v,i,S?.workflowCount,S.workflowsTotal]),e.useEffect(()=>{!h&&j.length===0&&k({blockTransition:!0,type:"warning",message:o({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[o,h,j,k]),e.createElement(e.Fragment,null,e.createElement(y.lx,null),e.createElement(A.Hy,{value:O},e.createElement(A.l0,{onSubmit:O.handleSubmit},e.createElement(y.h4,{navigationAction:e.createElement(y.eJ,{href:"/settings/review-workflows"}),primaryAction:D&&e.createElement($.z,{startIcon:e.createElement(K.Z,null),type:"submit",size:"M",disabled:!pe,loading:!Object.keys(L).length>0&&Ce},o({id:"global.save",defaultMessage:"Save"})),subtitle:!h&&o({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:r.stages.length}),title:r.name}),e.createElement(y.fC,null,h?e.createElement(T.k,{justifyContent:"center"},e.createElement(G.a,null,o({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"}))):e.createElement(T.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(re.Y,{canUpdate:D}),e.createElement(le.U,{canDelete:ye,canUpdate:D,stages:O.values?.stages}))))),e.createElement(d.QH.Root,{isConfirmButtonLoading:h,isOpen:Object.keys(L).length>0,onToggleDialog:Te,onConfirm:Me},e.createElement(d.QH.Body,null,e.createElement(T.k,{direction:"column",gap:5},L.hasDeletedServerStages&&e.createElement(I.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})),L.hasReassignedContentTypes&&e.createElement(I.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:N.filter(s=>r.contentTypes.includes(s)).length})),e.createElement(I.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(m.fC,{isOpen:X==="workflow",onClose:()=>w(!1)},e.createElement(m.Dx,null,o({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(m.uT,null,o({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(m.fC,{isOpen:X==="stage",onClose:()=>w(!1)},e.createElement(m.Dx,null,o({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(m.uT,null,o({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ge(){const E=(0,a.v9)(V._);return e.createElement(d.O4,{permissions:E.settings["review-workflows"].main},e.createElement(fe,null))}}}]);
