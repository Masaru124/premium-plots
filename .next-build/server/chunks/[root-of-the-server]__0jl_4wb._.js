module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},13461,e=>{"use strict";var t=e.i(54799);let r="lakshie_admin_session";function a(e){return t.default.createHmac("sha256",process.env.ADMIN_SESSION_SECRET||process.env.ADMIN_PASSWORD||"").update(e).digest("hex")}e.s(["ADMIN_COOKIE",0,r,"ADMIN_MAX_AGE",0,28800,"adminConfigured",0,function(){return!!process.env.ADMIN_PASSWORD},"createSessionToken",0,function(){let e=Date.now()+288e5;return`${e}.${a(String(e))}`},"isAdminRequest",0,function(e){return function(e){if("string"!=typeof e)return!1;let[r,i]=e.split(".");if(!r||!i||Number(r)<Date.now())return!1;let o=a(r),s=Buffer.from(i,"hex"),n=Buffer.from(o,"hex");return s.length===n.length&&t.default.timingSafeEqual(s,n)}(function(e,t){for(let r of(e?.headers?.get?.("cookie")||"").split(";")){let[e,...a]=r.trim().split("=");if(e===t)return decodeURIComponent(a.join("="))}return null}(e,r))},"passwordsMatch",0,function(e){let r=process.env.ADMIN_PASSWORD||"";if(!e||!r)return!1;let a=Buffer.from(String(e)),i=Buffer.from(r);return a.length===i.length&&t.default.timingSafeEqual(a,i)},"unauthorized",0,function(){return Response.json({success:!1,error:"Admin authentication required."},{status:401})}])},23862,e=>e.a(async(t,r)=>{try{let t=await e.y("pg-587764f78a6c7a9c");e.n(t),r()}catch(e){r(e)}},!0),79058,e=>e.a(async(t,r)=>{try{let l;var a=e.i(23862),i=e.i(30071),o=t([a]);[a]=o.then?(await o)():o;let{Pool:p}=a.default;function s(){if(!l){let e=(process.env.DATABASE_URL||"").replace("&channel_binding=require","").replace("channel_binding=require&","");l=new p({connectionString:e,ssl:{rejectUnauthorized:!1},max:10,idleTimeoutMillis:3e4,connectionTimeoutMillis:1e4})}return l}async function n(){let e=s(),t=await e.connect();try{for(let e of(await t.query(`
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
        `,[e.id,e.name,e.phone,e.email||"",e.projectTitle||"",e.visitDate||"",e.visitTime||"",e.cabPickup||!1,e.pickupLocation||"",e.status||"Confirmed",e.createdAt||new Date().toLocaleString()])}finally{t.release()}}e.s(["getPool",0,s,"initDatabase",0,n]),r()}catch(e){r(e)}},!1),97847,e=>e.a(async(t,r)=>{try{var a=e.i(89171),i=e.i(79058),o=e.i(30071),s=e.i(13461),n=t([i]);async function l(){try{await (0,i.initDatabase)();let e=(0,i.getPool)(),t=(await e.query("SELECT * FROM projects ORDER BY created_at ASC")).rows.map(e=>({id:e.id,title:e.title,slug:e.slug,propertyType:e.property_type,groupName:e.group_name,tagline:e.tagline,developer:e.developer,location:e.location,corridorId:e.corridor_id,constructionStatus:e.construction_status,developerPhone:e.developer_phone,whatsappPhone:e.whatsapp_phone,priceRange:e.price_range,startPrice:Number(e.start_price),formattedStartPrice:e.formatted_start_price,dimensions:"string"==typeof e.dimensions?JSON.parse(e.dimensions):e.dimensions||[],totalPlots:e.total_plots,availablePlots:e.available_plots,reraId:e.rera_id,approvalType:e.approval_type,bankApprovals:"string"==typeof e.bank_approvals?JSON.parse(e.bank_approvals):e.bank_approvals||[],heroImage:e.hero_image,galleryImages:"string"==typeof e.gallery_images?JSON.parse(e.gallery_images):e.gallery_images||[],overview:e.overview,highlights:"string"==typeof e.highlights?JSON.parse(e.highlights):e.highlights||[],landmarks:"string"==typeof e.landmarks?JSON.parse(e.landmarks):e.landmarks||[],layoutGrid:"string"==typeof e.layout_grid?JSON.parse(e.layout_grid):e.layout_grid||[]}));return a.NextResponse.json({success:!0,projects:t})}catch(e){return console.error("Error in GET /api/projects:",e),a.NextResponse.json({success:!1,fallback:!0,projects:o.INITIAL_PROJECTS,error:e.message})}}async function p(e){if(!(0,s.isAdminRequest)(e))return(0,s.unauthorized)();try{await (0,i.initDatabase)();let t=await e.json(),r=(0,i.getPool)(),o=t.id||`project-${Date.now()}`,s=t.slug||t.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return await r.query(`
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
        property_type = EXCLUDED.property_type,
        group_name = EXCLUDED.group_name,
        tagline = EXCLUDED.tagline,
        developer = EXCLUDED.developer,
        location = EXCLUDED.location,
        corridor_id = EXCLUDED.corridor_id,
        price_range = EXCLUDED.price_range,
        start_price = EXCLUDED.start_price,
        formatted_start_price = EXCLUDED.formatted_start_price,
        dimensions = EXCLUDED.dimensions,
        hero_image = EXCLUDED.hero_image,
        overview = EXCLUDED.overview,
        highlights = EXCLUDED.highlights;
    `,[o,t.title,s,t.propertyType||"Open Plots",t.groupName||"Independent",t.tagline||"",t.developer||"",t.location||"",t.corridorId||"all-corridors",t.constructionStatus||"Ready for Construction",t.developerPhone||"+91 8431909508",t.whatsappPhone||"+91 8431909508",t.priceRange||"",t.startPrice||0,t.formattedStartPrice||"",JSON.stringify(t.dimensions||[]),t.totalPlots||100,t.availablePlots||30,t.reraId||"",t.approvalType||"",JSON.stringify(t.bankApprovals||[]),t.heroImage||"",JSON.stringify(t.galleryImages||[]),t.overview||"",JSON.stringify(t.highlights||[]),JSON.stringify(t.landmarks||[]),JSON.stringify(t.layoutGrid||[])]),a.NextResponse.json({success:!0,id:o,message:"Project saved in Neon DB successfully!"})}catch(e){return console.error("Error in POST /api/projects:",e),a.NextResponse.json({success:!1,error:e.message},{status:500})}}async function c(e){if(!(0,s.isAdminRequest)(e))return(0,s.unauthorized)();try{let{searchParams:t}=new URL(e.url),r=t.get("id");if(!r)return a.NextResponse.json({success:!1,error:"Project ID is required"},{status:400});let o=(0,i.getPool)();return await o.query("DELETE FROM projects WHERE id = $1",[r]),a.NextResponse.json({success:!0,message:`Project ${r} deleted from Neon DB`})}catch(e){return console.error("Error in DELETE /api/projects:",e),a.NextResponse.json({success:!1,error:e.message},{status:500})}}async function d(e){if(!(0,s.isAdminRequest)(e))return(0,s.unauthorized)();try{let{projectId:t,layoutGrid:r,availablePlots:o}=await e.json(),s=(0,i.getPool)();return await s.query(`
      UPDATE projects
      SET layout_grid = $1, available_plots = $2
      WHERE id = $3
    `,[JSON.stringify(r),o,t]),a.NextResponse.json({success:!0,message:"Plot status updated in Neon DB"})}catch(e){return console.error("Error in PATCH /api/projects:",e),a.NextResponse.json({success:!1,error:e.message},{status:500})}}[i]=n.then?(await n)():n,e.s(["DELETE",0,c,"GET",0,l,"PATCH",0,d,"POST",0,p]),r()}catch(e){r(e)}},!1),9068,e=>e.a(async(t,r)=>{try{var a=e.i(47909),i=e.i(74017),o=e.i(96250),s=e.i(59756),n=e.i(61916),l=e.i(74677),p=e.i(69741),c=e.i(16795),d=e.i(87718),u=e.i(95169),g=e.i(47587),E=e.i(66012),h=e.i(70101),_=e.i(26937),m=e.i(10372),R=e.i(93695);e.i(52474);var y=e.i(220),v=e.i(97847),f=t([v]);[v]=f.then?(await f)():f;let C=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/projects/route",pathname:"/api/projects",filename:"route",bundlePath:""},distDir:".next-build",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/projects/route.js",nextConfigOutput:"",userland:v,...{}}),{workAsyncStorage:D,workUnitAsyncStorage:N,serverHooks:T}=C;async function A(e,t,r){r.requestMeta&&(0,s.setRequestMeta)(e,r.requestMeta),C.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/projects/route";a=a.replace(/\/index$/,"")||"/";let o=await C.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!o)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:v,deploymentId:f,params:A,nextConfig:D,parsedUrl:N,isDraftMode:T,prerenderManifest:S,routerServerContext:w,isOnDemandRevalidate:O,revalidateOnlyGenerated:$,resolvedPathname:x,clientReferenceManifest:L,serverActionsManifest:I}=o,U=(0,p.normalizeAppPath)(a),P=!!(S.dynamicRoutes[U]||S.routes[x]),b=async()=>((null==w?void 0:w.render404)?await w.render404(e,t,N,!1):t.end("This page could not be found"),null);if(P&&!T){let e=!!S.routes[x],t=S.dynamicRoutes[U];if(t&&!1===t.fallback&&!e){if(D.adapterPath)return await b();throw new R.NoFallbackError}}let j=null;!P||C.isDev||T||(j=x,j="/index"===j?"/":j);let k=!0===C.isDev||!P,H=P&&!k;I&&L&&(0,l.setManifestsSingleton)({page:a,clientReferenceManifest:L,serverActionsManifest:I});let q=e.method||"GET",X=(0,n.getTracer)(),M=X.getActiveScopeSpan(),V=!!(null==w?void 0:w.isWrappedByNextServer),J=!!(0,s.getRequestMeta)(e,"minimalMode"),B=(0,s.getRequestMeta)(e,"incrementalCache")||await C.getIncrementalCache(e,D,S,J);null==B||B.resetRequestCache(),globalThis.__incrementalCache=B;let F={params:A,previewProps:S.preview,renderOpts:{experimental:{authInterrupts:!!D.experimental.authInterrupts},cacheComponents:!!D.cacheComponents,supportsDynamicResponse:k,incrementalCache:B,cacheLifeProfiles:D.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,i)=>C.onRequestError(e,t,a,i,w)},sharedContext:{buildId:v,deploymentId:f}},G=new c.NodeNextRequest(e),K=new c.NodeNextResponse(t),W=d.NextRequestAdapter.fromNodeNextRequest(G,(0,d.signalFromNodeResponse)(t));try{let o,s=async e=>C.handle(W,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=X.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let i=r.get("next.route");if(i){let t=`${q} ${i}`;e.setAttributes({"next.route":i,"http.route":i,"next.span_name":t}),e.updateName(t),o&&o!==e&&(o.setAttribute("http.route",i),o.updateName(t))}else e.updateName(`${q} ${a}`)}),l=async o=>{var n,l;let p=async({previousCacheEntry:i})=>{try{if(!J&&O&&$&&!i)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await s(o);e.fetchMetrics=F.renderOpts.fetchMetrics;let n=F.renderOpts.pendingWaitUntil;n&&r.waitUntil&&(r.waitUntil(n),n=void 0);let l=F.renderOpts.collectedTags;if(!P)return await (0,E.sendResponse)(G,K,a,F.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(a.headers);l&&(t[m.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,i=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:i}}}}catch(t){throw(null==i?void 0:i.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,g.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:O})},!1,w),t}},c=await C.handleResponse({req:e,nextConfig:D,cacheKey:j,routeKind:i.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:$,responseGenerator:p,waitUntil:r.waitUntil,isMinimalMode:J});if(!P)return null;if((null==c||null==(n=c.value)?void 0:n.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});J||t.setHeader("x-nextjs-cache",O?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let d=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return J&&P||d.delete(m.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||d.get("Cache-Control")||d.set("Cache-Control",(0,_.getCacheControlHeader)(c.cacheControl)),await (0,E.sendResponse)(G,K,new Response(c.value.body,{headers:d,status:c.value.status||200})),null};V&&M?await l(M):(o=X.getActiveScopeSpan(),await X.withPropagatedContext(e.headers,()=>X.trace(u.BaseServerSpan.handleRequest,{spanName:`${q} ${a}`,kind:n.SpanKind.SERVER,attributes:{"http.method":q,"http.target":e.url}},l),void 0,!V))}catch(t){if(t instanceof R.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:U,routeType:"route",revalidateReason:(0,g.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:O})},!1,w),P)throw t;return await (0,E.sendResponse)(G,K,new Response(null,{status:500})),null}}e.s(["handler",0,A,"patchFetch",0,function(){return(0,o.patchFetch)({workAsyncStorage:D,workUnitAsyncStorage:N})},"routeModule",0,C,"serverHooks",0,T,"workAsyncStorage",0,D,"workUnitAsyncStorage",0,N]),r()}catch(e){r(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__0jl_4wb._.js.map