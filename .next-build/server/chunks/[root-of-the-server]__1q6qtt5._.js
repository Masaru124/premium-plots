module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},13461,e=>{"use strict";var t=e.i(54799);let r="lakshie_admin_session";function a(e){return t.default.createHmac("sha256",process.env.ADMIN_SESSION_SECRET||process.env.ADMIN_PASSWORD||"").update(e).digest("hex")}e.s(["ADMIN_COOKIE",0,r,"ADMIN_MAX_AGE",0,28800,"adminConfigured",0,function(){return!!process.env.ADMIN_PASSWORD},"createSessionToken",0,function(){let e=Date.now()+288e5;return`${e}.${a(String(e))}`},"isAdminRequest",0,function(e){return function(e){if("string"!=typeof e)return!1;let[r,i]=e.split(".");if(!r||!i||Number(r)<Date.now())return!1;let n=a(r),s=Buffer.from(i,"hex"),o=Buffer.from(n,"hex");return s.length===o.length&&t.default.timingSafeEqual(s,o)}(function(e,t){for(let r of(e?.headers?.get?.("cookie")||"").split(";")){let[e,...a]=r.trim().split("=");if(e===t)return decodeURIComponent(a.join("="))}return null}(e,r))},"passwordsMatch",0,function(e){let r=process.env.ADMIN_PASSWORD||"";if(!e||!r)return!1;let a=Buffer.from(String(e)),i=Buffer.from(r);return a.length===i.length&&t.default.timingSafeEqual(a,i)},"unauthorized",0,function(){return Response.json({success:!1,error:"Admin authentication required."},{status:401})}])},23862,e=>e.a(async(t,r)=>{try{let t=await e.y("pg-587764f78a6c7a9c");e.n(t),r()}catch(e){r(e)}},!0),79058,e=>e.a(async(t,r)=>{try{let l;var a=e.i(23862),i=e.i(30071),n=t([a]);[a]=n.then?(await n)():n;let{Pool:u}=a.default;function s(){if(!l){let e=(process.env.DATABASE_URL||"").replace("&channel_binding=require","").replace("channel_binding=require&","");l=new u({connectionString:e,ssl:{rejectUnauthorized:!1},max:10,idleTimeoutMillis:3e4,connectionTimeoutMillis:1e4})}return l}async function o(){let e=s(),t=await e.connect();try{for(let e of(await t.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        property_type VARCHAR(100) NOT NULL,
        group_name VARCHAR(150),
        tagline TEXT,
        developer VARCHAR(255),
        location VARCHAR(255),
        corridor_id VARCHAR(100),
        construction_status VARCHAR(100),
        developer_phone VARCHAR(50),
        whatsapp_phone VARCHAR(50),
        price_range VARCHAR(150),
        start_price BIGINT,
        formatted_start_price VARCHAR(100),
        dimensions JSONB,
        total_plots INT,
        available_plots INT,
        rera_id VARCHAR(150),
        approval_type VARCHAR(150),
        bank_approvals JSONB,
        hero_image TEXT,
        gallery_images JSONB,
        overview TEXT,
        highlights JSONB,
        landmarks JSONB,
        layout_grid JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `),await t.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(150),
        project_title VARCHAR(255),
        visit_date VARCHAR(50),
        visit_time VARCHAR(50),
        cab_pickup BOOLEAN DEFAULT FALSE,
        pickup_location TEXT,
        status VARCHAR(50) DEFAULT 'Confirmed',
        created_at VARCHAR(100) DEFAULT NOW()::text
      );
    `),i.INITIAL_PROJECTS))await t.query(`
        INSERT INTO projects (
          id, title, slug, property_type, group_name, tagline, developer,
          location, corridor_id, construction_status, developer_phone,
          whatsapp_phone, price_range, start_price, formatted_start_price,
          dimensions, total_plots, available_plots, rera_id, approval_type,
          bank_approvals, hero_image, gallery_images, overview, highlights,
          landmarks, layout_grid
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
          $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27
        ) ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          property_type = EXCLUDED.property_type,
          group_name = EXCLUDED.group_name,
          tagline = EXCLUDED.tagline,
          developer = EXCLUDED.developer,
          location = EXCLUDED.location,
          corridor_id = EXCLUDED.corridor_id,
          construction_status = EXCLUDED.construction_status,
          price_range = EXCLUDED.price_range,
          start_price = EXCLUDED.start_price,
          formatted_start_price = EXCLUDED.formatted_start_price,
          dimensions = EXCLUDED.dimensions,
          hero_image = EXCLUDED.hero_image,
          gallery_images = EXCLUDED.gallery_images,
          overview = EXCLUDED.overview,
          highlights = EXCLUDED.highlights,
          landmarks = EXCLUDED.landmarks;
      `,[e.id,e.title,e.slug,e.propertyType,e.groupName||"",e.tagline||"",e.developer||"",e.location||"",e.corridorId||"",e.constructionStatus||"Ready for Construction",e.developerPhone||"+91 8431909508",e.whatsappPhone||"+91 8431909508",e.priceRange||"",e.startPrice||0,e.formattedStartPrice||"",JSON.stringify(e.dimensions||[]),e.totalPlots||100,e.availablePlots||30,e.reraId||"",e.approvalType||"",JSON.stringify(e.bankApprovals||[]),e.heroImage||"",JSON.stringify(e.galleryImages||[]),e.overview||"",JSON.stringify(e.highlights||[]),JSON.stringify(e.landmarks||[]),JSON.stringify(e.layoutGrid||[])]);let e=await t.query("SELECT COUNT(*) FROM leads");if(0===parseInt(e.rows[0].count,10))for(let e of i.INITIAL_LEADS)await t.query(`
          INSERT INTO leads (
            id, name, phone, email, project_title, visit_date, visit_time,
            cab_pickup, pickup_location, status, created_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (id) DO NOTHING;
        `,[e.id,e.name,e.phone,e.email||"",e.projectTitle||"",e.visitDate||"",e.visitTime||"",e.cabPickup||!1,e.pickupLocation||"",e.status||"Confirmed",e.createdAt||new Date().toLocaleString()])}finally{t.release()}}e.s(["getPool",0,s,"initDatabase",0,o]),r()}catch(e){r(e)}},!1),18207,e=>e.a(async(t,r)=>{try{var a=e.i(89171),i=e.i(79058),n=e.i(13461),s=t([i]);async function o(e){if(!(0,n.isAdminRequest)(e))return(0,n.unauthorized)();try{await (0,i.initDatabase)();let e=(0,i.getPool)(),t=(await e.query("SELECT * FROM leads ORDER BY created_at DESC")).rows.map(e=>({id:e.id,name:e.name,phone:e.phone,email:e.email,projectTitle:e.project_title,visitDate:e.visit_date,visitTime:e.visit_time,cabPickup:e.cab_pickup,pickupLocation:e.pickup_location,status:e.status,createdAt:e.created_at}));return a.NextResponse.json({success:!0,leads:t})}catch(e){return console.error("Error in GET /api/leads:",e),a.NextResponse.json({success:!1,leads:[]},{status:503})}}async function l(e){try{await (0,i.initDatabase)();let t=await e.json(),r=(0,i.getPool)(),n=t.id||`lead-${Date.now()}`,s=new Date().toLocaleString();return await r.query(`
      INSERT INTO leads (
        id, name, phone, email, project_title, visit_date, visit_time,
        cab_pickup, pickup_location, status, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      ON CONFLICT (id) DO UPDATE SET
        status = EXCLUDED.status,
        visit_date = EXCLUDED.visit_date,
        visit_time = EXCLUDED.visit_time;
    `,[n,t.name,t.phone,t.email||"",t.projectTitle||"",t.visitDate||"",t.visitTime||"",t.cabPickup||!1,t.pickupLocation||"",t.status||"Confirmed",s]),a.NextResponse.json({success:!0,id:n,message:"Lead saved in Neon DB successfully!"})}catch(e){return console.error("Error in POST /api/leads:",e),a.NextResponse.json({success:!1,error:e.message},{status:500})}}async function u(e){if(!(0,n.isAdminRequest)(e))return(0,n.unauthorized)();try{let{leadId:t,status:r}=await e.json(),n=(0,i.getPool)();return await n.query(`
      UPDATE leads
      SET status = $1
      WHERE id = $2
    `,[r,t]),a.NextResponse.json({success:!0,message:"Lead status updated in Neon DB"})}catch(e){return console.error("Error in PATCH /api/leads:",e),a.NextResponse.json({success:!1,error:e.message},{status:500})}}[i]=s.then?(await s)():s,e.s(["GET",0,o,"PATCH",0,u,"POST",0,l]),r()}catch(e){r(e)}},!1),44976,e=>e.a(async(t,r)=>{try{var a=e.i(47909),i=e.i(74017),n=e.i(96250),s=e.i(59756),o=e.i(61916),l=e.i(74677),u=e.i(69741),p=e.i(16795),c=e.i(87718),d=e.i(95169),E=e.i(47587),R=e.i(66012),h=e.i(70101),g=e.i(26937),A=e.i(10372),m=e.i(93695);e.i(52474);var _=e.i(220),v=e.i(18207),f=t([v]);[v]=f.then?(await f)():f;let T=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/leads/route",pathname:"/api/leads",filename:"route",bundlePath:""},distDir:".next-build",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/leads/route.js",nextConfigOutput:"",userland:v,...{}}),{workAsyncStorage:y,workUnitAsyncStorage:D,serverHooks:N}=T;async function C(e,t,r){r.requestMeta&&(0,s.setRequestMeta)(e,r.requestMeta),T.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/leads/route";a=a.replace(/\/index$/,"")||"/";let n=await T.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!n)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:v,deploymentId:f,params:C,nextConfig:y,parsedUrl:D,isDraftMode:N,prerenderManifest:x,routerServerContext:w,isOnDemandRevalidate:S,revalidateOnlyGenerated:O,resolvedPathname:L,clientReferenceManifest:$,serverActionsManifest:I}=n,U=(0,u.normalizeAppPath)(a),P=!!(x.dynamicRoutes[U]||x.routes[L]),b=async()=>((null==w?void 0:w.render404)?await w.render404(e,t,D,!1):t.end("This page could not be found"),null);if(P&&!N){let e=!!x.routes[L],t=x.dynamicRoutes[U];if(t&&!1===t.fallback&&!e){if(y.adapterPath)return await b();throw new m.NoFallbackError}}let H=null;!P||T.isDev||N||(H=L,H="/index"===H?"/":H);let k=!0===T.isDev||!P,q=P&&!k;I&&$&&(0,l.setManifestsSingleton)({page:a,clientReferenceManifest:$,serverActionsManifest:I});let j=e.method||"GET",M=(0,o.getTracer)(),X=M.getActiveScopeSpan(),V=!!(null==w?void 0:w.isWrappedByNextServer),B=!!(0,s.getRequestMeta)(e,"minimalMode"),F=(0,s.getRequestMeta)(e,"incrementalCache")||await T.getIncrementalCache(e,y,x,B);null==F||F.resetRequestCache(),globalThis.__incrementalCache=F;let J={params:C,previewProps:x.preview,renderOpts:{experimental:{authInterrupts:!!y.experimental.authInterrupts},cacheComponents:!!y.cacheComponents,supportsDynamicResponse:k,incrementalCache:F,cacheLifeProfiles:y.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,i)=>T.onRequestError(e,t,a,i,w)},sharedContext:{buildId:v,deploymentId:f}},K=new p.NodeNextRequest(e),W=new p.NodeNextResponse(t),G=c.NextRequestAdapter.fromNodeNextRequest(K,(0,c.signalFromNodeResponse)(t));try{let n,s=async e=>T.handle(G,J).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=M.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let i=r.get("next.route");if(i){let t=`${j} ${i}`;e.setAttributes({"next.route":i,"http.route":i,"next.span_name":t}),e.updateName(t),n&&n!==e&&(n.setAttribute("http.route",i),n.updateName(t))}else e.updateName(`${j} ${a}`)}),l=async n=>{var o,l;let u=async({previousCacheEntry:i})=>{try{if(!B&&S&&O&&!i)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await s(n);e.fetchMetrics=J.renderOpts.fetchMetrics;let o=J.renderOpts.pendingWaitUntil;o&&r.waitUntil&&(r.waitUntil(o),o=void 0);let l=J.renderOpts.collectedTags;if(!P)return await (0,R.sendResponse)(K,W,a,J.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(a.headers);l&&(t[A.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==J.renderOpts.collectedRevalidate&&!(J.renderOpts.collectedRevalidate>=A.INFINITE_CACHE)&&J.renderOpts.collectedRevalidate,i=void 0===J.renderOpts.collectedExpire||J.renderOpts.collectedExpire>=A.INFINITE_CACHE?void 0:J.renderOpts.collectedExpire;return{value:{kind:_.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:i}}}}catch(t){throw(null==i?void 0:i.isStale)&&await T.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,E.getRevalidateReason)({isStaticGeneration:q,isOnDemandRevalidate:S})},!1,w),t}},p=await T.handleResponse({req:e,nextConfig:y,cacheKey:H,routeKind:i.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:x,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:O,responseGenerator:u,waitUntil:r.waitUntil,isMinimalMode:B});if(!P)return null;if((null==p||null==(o=p.value)?void 0:o.kind)!==_.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});B||t.setHeader("x-nextjs-cache",S?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),N&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(p.value.headers);return B&&P||c.delete(A.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,g.getCacheControlHeader)(p.cacheControl)),await (0,R.sendResponse)(K,W,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};V&&X?await l(X):(n=M.getActiveScopeSpan(),await M.withPropagatedContext(e.headers,()=>M.trace(d.BaseServerSpan.handleRequest,{spanName:`${j} ${a}`,kind:o.SpanKind.SERVER,attributes:{"http.method":j,"http.target":e.url}},l),void 0,!V))}catch(t){if(t instanceof m.NoFallbackError||await T.onRequestError(e,t,{routerKind:"App Router",routePath:U,routeType:"route",revalidateReason:(0,E.getRevalidateReason)({isStaticGeneration:q,isOnDemandRevalidate:S})},!1,w),P)throw t;return await (0,R.sendResponse)(K,W,new Response(null,{status:500})),null}}e.s(["handler",0,C,"patchFetch",0,function(){return(0,n.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:D})},"routeModule",0,T,"serverHooks",0,N,"workAsyncStorage",0,y,"workUnitAsyncStorage",0,D]),r()}catch(e){r(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q6qtt5._.js.map