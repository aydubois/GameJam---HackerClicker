let blockMin = blockBS = blockSE = blockCyb = blockPhi = blockSpa = blockSpy= blockTro = blockRans = 1

let nextAngleChangeTime = 1000;

let bitcoinsTotal = 0;
// PRICES
let priceMining = .5, priceBreakSecurity = 3.5, priceSocialEngineering  = 17.5, priceCybernet = 20, pricePhishing = 120, priceTrojan = 140, priceSpam = 90, priceSpyware = 300, priceRansomware = 1000, priceBotnet =10000;
// BPS
let bpsMining = 0.1, bpsBreakSecurity = 0, bpsSocialEngineering  = 0, bpsCybernet = 0, bpsPhishing = 0, bpsTrojan = 0, bpsSpam = 0, bpsSpyware = 0, bpsRansomware = 0, bpsBotnet =0;
// LEVELS
let levelMining = 1, levelBreakSecurity = 0, levelSocialEngineering = 0, levelCybernet = 0, levelPhishing = 0, levelTrojan = 0, levelSpam = 0, levelSpyware = 0, levelRansomware = 0, levelBotnet = 0;
// BTN
let btnBreakSecu, btnSocialEnge, btnCybernet, btnPhishing, btnSpam, btnTrojan, btnSpyware, btnRansomware, btnBotnet, btnMining,btnRestart;

let bonusRestart = nbRestart = 0;
let background, bitcoin, panelBackground, panelTree, graphics, graphics2, backgroundAnim, containerBtnTree;
let textT, textRestart;
let textBitcoinPerSecond;
let totalBps = ( bpsPhishing + bpsRansomware 
    + bpsSocialEngineering + bpsSpam + bpsSpyware + bpsTrojan + bpsBotnet +
    bpsBreakSecurity + bpsCybernet);
let panelOk = 0; //Ouverture fermeture du panneau
let nbF = 0;
let homeBackground;
let group;
const config = {
    width: 1024,
    height: 768,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
let phaser = new Phaser.Game(config);
let pointer = phaser.input.activePointer;
function preload() {
    for(let i =1;i<=36;i++) {
        this.load.image('homeBackground-'+i, 'assets/gif/home/frame-'+i+'.jpg');
    }


    this.load.image('homeTitle', 'assets/homeTitle.png');
    this.load.image('bkground', 'assets/bkground.gif')

    this.load.image('frame-1', 'assets/spritesheet_background/frame-1.gif');
    this.load.image('frame-2', 'assets/spritesheet_background/frame-2.gif');
    this.load.image('frame-3', 'assets/spritesheet_background/frame-3.gif');
    this.load.image('frame-4', 'assets/spritesheet_background/frame-4.gif');
    this.load.image('frame-5', 'assets/spritesheet_background/frame-5.gif');
    this.load.image('frame-6', 'assets/spritesheet_background/frame-6.gif');
    this.load.image('frame-7', 'assets/spritesheet_background/frame-7.gif');
    this.load.image('frame-8', 'assets/spritesheet_background/frame-8.gif');
    this.load.image('frame-9', 'assets/spritesheet_background/frame-9.gif');
    this.load.image('frame-10', 'assets/spritesheet_background/frame-10.gif');
    this.load.image('frame-11', 'assets/spritesheet_background/frame-11.gif');
    this.load.image('frame-12', 'assets/spritesheet_background/frame-12.gif');
    this.load.image('frame-13', 'assets/spritesheet_background/frame-13.gif');
    this.load.image('frame-14', 'assets/spritesheet_background/frame-14.gif');
    this.load.image('frame-15', 'assets/spritesheet_background/frame-15.gif');
    this.load.image('frame-16', 'assets/spritesheet_background/frame-16.gif');
    this.load.image('frame-17', 'assets/spritesheet_background/frame-17.gif');
    this.load.image('frame-18', 'assets/spritesheet_background/frame-18.gif');
    this.load.image('frame-19', 'assets/spritesheet_background/frame-19.gif');
    this.load.image('frame-20', 'assets/spritesheet_background/frame-20.gif');
    this.load.image('frame-21', 'assets/spritesheet_background/frame-21.gif');
    this.load.image('frame-22', 'assets/spritesheet_background/frame-22.gif');
    this.load.image('frame-23', 'assets/spritesheet_background/frame-23.gif');
    this.load.image('frame-24', 'assets/spritesheet_background/frame-24.gif');


    this.load.image('bitcoin', 'assets/bitcoin.png');
    this.load.spritesheet('btnGlobal', 'assets/btnGlobal.png', { frameWidth: 60, frameHeight: 60, endFrame: 44 });

    this.load.image('btnRestart', 'assets/btn/btnMining.png');

    panelBackground = new Phaser.Geom.Rectangle(0, 45, 445, 723);
    panelBottomBackground = new Phaser.Geom.Rectangle(5, 638, 435, 120);
    this.load.image('panelTree', ('assets/panelTree.png'));
}

function create() {
    
    this.physics.world.setFPS(30)
    
    background = this.add.image(450,400,"bkground").setScale(2.85, 2.85).setInteractive();
    backgroundAnim = this.add.sprite(450,400, 'frame-1').setScale(2.85, 2.85);
    
    graphics = this.add.graphics();
    graphics.fillStyle(0x404040, .75);
    graphics.fillRectShape(panelBackground);
    graphics2 = this.add.graphics();
    graphics2.fillStyle(0x000, .60);
    graphics2.fillRectShape(panelBottomBackground);

    bitcoin = this.add.group({
        key: 'star',
        repeat: 0,
        setXY: { x: this.input.mouse.manager.mousePointer.downX, y: this.input.manager.mousePointer.downY}
    });

    panelTree = this.add.group();
    panelTree.create(225,400,'panelTree');

    
    btnRestart = this.add.sprite(36,81, "btnGlobal",40 ).setInteractive();
    btnMining = this.add.sprite(409, 81, 'btnGlobal', 36).setInteractive();
    btnBreakSecu = this.add.sprite(225, 220, 'btnGlobal', 3).setInteractive();
    btnSocialEnge = this.add.sprite(120, 310, 'btnGlobal', 7).setInteractive();
    btnCybernet = this.add.sprite(330, 310, 'btnGlobal', 11).setInteractive();
    btnSpam = this.add.sprite(60, 400, 'btnGlobal', 15).setInteractive();
    btnPhishing = this.add.sprite(180, 400, 'btnGlobal', 19).setInteractive();
    btnTrojan = this.add.sprite(270, 399, 'btnGlobal', 23).setInteractive();
    btnSpyware = this.add.sprite(390, 400, 'btnGlobal', 27).setInteractive();
    btnRansomware = this.add.sprite(225, 490, 'btnGlobal', 31).setInteractive();
    btnBotnet = this.add.sprite(225, 580, 'btnGlobal', 35).setInteractive();


    containerBtnTree = this.add.container(0,0,[btnMining, btnBreakSecu, btnSocialEnge, btnCybernet, btnPhishing, btnSpam, btnTrojan, btnSpyware, btnRansomware, btnBotnet, btnRestart]);
    
    background.on('pointerup', ()=>{
        homeBackground.destroy();
        let bitcoinAnimClick = bitcoin.create(this.input.mouse.manager.mousePointer.downX,this.input.manager.mousePointer.downY,'bitcoin').setScale(0.055,0.055);
        this.tweens.add({
            targets: bitcoinAnimClick,
            alpha: { from: 1, to: 0 },
            ease: 'Linear',
            duration: 600,
            repeat: 0,
            yoyo: false,
            y:{
                value: {
                    getStart: function (target, key, value, targetIndex, totalTargets, tween)
                    {
                        return value + 30;
                    },
                    getActive:  (target, key, value, targetIndex, totalTargets, tween)=>
                    {
                        return this.input.manager.mousePointer.downY;
                    },
                    getEnd: (target, key, value, targetIndex, totalTargets, tween) =>
                    {
                        return this.input.manager.mousePointer.downY - 200;
                    }
                },
                duration: 1000,
            }
        })
        bitcoinsTotal = bitcoinsTotal + bpsMining


    })

    restart(btnRestart);

    textT1 = this.add.text(50,660, '', {fontSize:'16px', fill:'#fff'});
    textT2 = this.add.text(50,685, '', {fontSize:'16px', fill:'#fff'});
    textT3 = this.add.text(50,710, '', {fontSize:'16px', fill:'#fff'});
    textT4 = this.add.text(50,735, '', {fontSize:'16px', fill:'#fff'});

    //textBarreHorizontal
    textNumberBitcoin = this.add.text(50, 0, 'Bitcoins: '+ bitcoinsTotal, {fontSize:'16px', fill:'#fff'});
    textBitcoinPerSecond = this.add.text(450, 0, 'Bps: '+ totalBps, {fontSize:'16px', fill:'#fff'});
    textGameTime = this.add.text(800,0, 'Temps de jeu: 0', {fontSize:'16px', fill:'#fff'} );
    textRestart = this.add.text(168, 81, 'Restart n° '+nbRestart, {fontSize:'16px', fill:'#fff'});

    // eventBtnClick : changement prix / bps /level
    eventBtnClick(btnMining, 'mining');
    eventBtnClick(btnSocialEnge, 'socialEngineering');
    eventBtnClick(btnCybernet, 'cybernet');
    eventBtnClick(btnPhishing, 'phishing');
    eventBtnClick(btnTrojan, 'trojan');
    eventBtnClick(btnSpam, 'spam');
    eventBtnClick(btnSpyware, 'spyware');
    eventBtnClick(btnBreakSecu, 'breakSecurity');
    eventBtnClick(btnRansomware, 'ransomware');
    eventBtnClick(btnBotnet, 'botnet');

    var timer = this.time.addEvent({
        delay: 100,                // ms
        callback: addBitcoinBps,
        loop: true
    });

    this.anims.create({
        key: 'homeTitle',
        frames: [
            { key: 'homeBackground-1'},
            { key: 'homeBackground-2'},
            { key: 'homeBackground-3'},
            { key: 'homeBackground-4'},
            { key: 'homeBackground-5'},
            { key: 'homeBackground-6'},
            { key: 'homeBackground-7'},
            { key: 'homeBackground-8'},
            { key: 'homeBackground-9'},
            { key: 'homeBackground-10'},
            { key: 'homeBackground-11'},
            { key: 'homeBackground-12'},
            { key: 'homeBackground-13'},
            { key: 'homeBackground-14'},
            { key: 'homeBackground-15'},
            { key: 'homeBackground-16'},
            { key: 'homeBackground-17'},
            { key: 'homeBackground-18'},
            { key: 'homeBackground-19'},
            { key: 'homeBackground-20'},
            { key: 'homeBackground-21'},
            { key: 'homeBackground-22'},
            { key: 'homeBackground-23'},
            { key: 'homeBackground-24'},
            { key: 'homeBackground-25'},
            { key: 'homeBackground-26'},
            { key: 'homeBackground-27'},
            { key: 'homeBackground-28'},
            { key: 'homeBackground-29'},
            { key: 'homeBackground-30'},
            { key: 'homeBackground-31'},
            { key: 'homeBackground-32'},
            { key: 'homeBackground-33'},
            { key: 'homeBackground-34'},
            { key: 'homeBackground-35'},
        ],
        frameRate: 8,
        repeat: -1,
        yoyo:true
    });

    homeBackground = this.add.sprite(515, 380, 'homeBackground-1').setScale(1.75, 2.27);
    homeBackground.play('homeTitle');
    // this.anims.staggerPlay('homeTitle');
}
function updateText(name, btn, level, price, bps, multiplFram, multiBPS) {
    
        // RAJOUTER LEVEL DEBLOCK
        btn.on('pointerover', () => {
            btn.setFrame(1+multiplFram*4);
            textT1.setText(name+' - Niv: '+ level);
            textT3.setText('Bps actuel: '+bps.toFixed(2));
            textT4.setText('Bps suivant: '+(level*multiBPS).toFixed(2));
        if(price <= bitcoinsTotal){
            textT2.setText('Prix Niv supérieur: '+price.toFixed(2)+'B').setTint(0xffffff);
        }else{
            textT2.setText('Prix Niv supérieur: '+price.toFixed(2)+'B').setTint(0xff0000);
        }
        } )
        .on('pointerout', () => {
            btn.setFrame(0+multiplFram*4);
            textT1.setText('');
            textT2.setText('');
            textT3.setText('');
            textT4.setText('');
        if(price <= bitcoinsTotal){
            
            btn.setFrame(0+multiplFram*4);
        }
        })
        .on('pointerdown', () => {

        if(price <= bitcoinsTotal){
            btn.setFrame(2+multiplFram*4);}

            if(name == "Mining" && level >= 10-1){
                btnBreakSecu.setFrame(0)

            }
            if(name == "Break Security" && level >= 10-1){
                btnSocialEnge.setFrame(4)
                btnCybernet.setFrame(8)
            } 
            if (name == "Social Engineering" && level >=10-1){
                btnSpam.setFrame(12)
            }
            if (name == "Social Engineering" && level >=25-1){
                btnPhishing.setFrame(16)
            }
            if (name == "Cybernet" && level >=10-1){
                btnSpyware.setFrame(24)
            }
            if (name == "Cybernet" && level >=25-1){
                btnTrojan.setFrame(20)
            }
            if ((name == "Trojan" && level >=50-1 && levelPhishing >= 50-1 )||
            (name == "Phishing" && level >=50-1 && levelTrojan >= 50-1)
            ){
                btnRansomware.setFrame(28)
            }
            if (name == "RansomWare" && level >=100-1){
                btnBotnet.setFrame(32)
            }

        })
        
        .on('pointerup', () => {
        if(price <= bitcoinsTotal){
            btn.setFrame(1+multiplFram*4);}
        });
        // btn.setFrame(0+multiplFram*4);
    
}
    function addBitcoinBps(){
        bitcoinsTotal = bitcoinsTotal + ( bpsPhishing + bpsRansomware 
            + bpsSocialEngineering + bpsSpam + bpsSpyware + bpsTrojan + bpsBotnet +
            bpsBreakSecurity + bpsCybernet)/10

    }

    function allEventBtn(){
        updateText('Mining', btnMining, levelMining, priceMining, bpsMining, 10 - 1, 0.01);
        if(levelMining >=10){
            updateText('Break Security', btnBreakSecu, levelBreakSecurity, priceBreakSecurity, bpsBreakSecurity, 1 - 1, 0.05);
        }
        if(levelBreakSecurity >= 10){
    
            updateText('Social Engineering', btnSocialEnge, levelSocialEngineering, priceSocialEngineering, bpsSocialEngineering, 2 - 1, 0.1);
            updateText('Cybernet', btnCybernet, levelCybernet, priceCybernet, bpsCybernet, 3 - 1, 0.5);
        }
        if(levelSocialEngineering >= 10){
            updateText('Spam', btnSpam, levelSpam, priceSpam, bpsSpam, 4 - 1, 0.8);
        }
        if(levelSocialEngineering >=25){
    
            updateText('Phishing', btnPhishing, levelPhishing, pricePhishing, bpsPhishing, 5 - 1, 1.4);
        }
        if(levelCybernet >=25){
            updateText('Trojan', btnTrojan, levelTrojan, priceTrojan, bpsTrojan, 6 - 1, 1.5);
        }
        if(levelCybernet >= 10){
    
            updateText('Spyware', btnSpyware, levelSpyware, priceSpyware, bpsSpyware, 7 - 1, 0.9);
        }
        if(levelPhishing >= 50 && levelTrojan >= 50){
            updateText('RansomWare', btnRansomware, levelRansomware, priceRansomware, bpsRansomware, 8 - 1, 4);
        }
        if(levelRansomware >=100){
    
            updateText('Botnet', btnBotnet, levelBotnet, priceBotnet, bpsBotnet, 9 - 1, 20);
        }
    }
    function update(time, delta){

        allEventBtn();

       delta = 0.4
        textNumberBitcoin.setText('Bitcoins: '+ bitcoinsTotal.toFixed(2));
        totalBps = bpsPhishing + bpsRansomware 
        + bpsSocialEngineering + bpsSpam + bpsSpyware + bpsTrojan + bpsBotnet +
        bpsBreakSecurity + bpsCybernet;
        textBitcoinPerSecond.setText('Bps: '+ totalBps.toFixed(2));
        textGameTime.setText('Temps de jeu: ' + (time/1000).toFixed(0) + 's')
        textRestart.setText('Restart n° '+nbRestart);

        if(totalBps > 0 && time > nextAngleChangeTime){
            let duree = totalBps < 20 ? 1000 : (totalBps < 50 ? 800 : (totalBps < 100 ? 600 : 400));
                nextAngleChangeTime = time + duree;
            let x = Phaser.Math.Between(600, 800)
            let y = Phaser.Math.Between(200, 300)
            delta = 1/30
            let bitcoinAnimClickBPS = bitcoin.create(x,y,'bitcoin').setScale(0.055,0.055).setTint(0x00ff41);
            this.tweens.add({
                targets: bitcoinAnimClickBPS,
                alpha: { from: 1, to: 0 },
                ease: 'Linear',
                duration: duree + 100,
                repeat: 0,
                yoyo: false,
                y:{
                    value: {
                        getStart: function (target, key, value, targetIndex, totalTargets, tween)
                        {
                            return value ;
                        },
                        getActive:  (target, key, value, targetIndex, totalTargets, tween)=>
                        {
                            return y
                        },
                        getEnd: (target, key, value, targetIndex, totalTargets, tween) =>
                        {
                            return y-250;
                        }
                    },
                    duration: 1000,
                }
            })
        }
    }
function settingText(name, level, bps, price,multiBPS ){
        textT1.setText(name+' - Niv: '+ level);
        textT3.setText('Bps actuel: '+bps.toFixed(2));
        textT4.setText('Bps suivant: '+(level*multiBPS).toFixed(2));
    if(price <= bitcoinsTotal){
        textT2.setText('Prix Niv supérieur: '+price.toFixed(2)+'B').setTint(0xffffff);
    }else{
        textT2.setText('Prix Niv supérieur: '+price.toFixed(2)+'B').setTint(0xff0000);
       
    }
}
function eventBtnClick(image, name){
    image.on('pointerdown', ()=>{
        switch (name) {
            case "mining":
                if(bitcoinsTotal >= priceMining){
                    levelMining ++
                    bitcoinsTotal = bitcoinsTotal - priceMining;
                    bpsMining = levelMining*0.01 + bonusRestart;
                    priceMining =  .5  * Math.pow(1.07,levelMining);
                    settingText("mining", levelMining,bpsMining, priceMining, .01 )
                }
                break;
            case "breakSecurity":
                if(bitcoinsTotal >= priceBreakSecurity && levelMining >= 10){
                    levelBreakSecurity ++
                    bitcoinsTotal = bitcoinsTotal - priceBreakSecurity;
                    bpsBreakSecurity = levelBreakSecurity*0.05 + bonusRestart;
                    priceBreakSecurity = 3.5  * Math.pow(1.07,levelBreakSecurity);
                    settingText("breakSecurity", levelBreakSecurity,bpsBreakSecurity, priceBreakSecurity, .05 )
                }
                break;
            case "socialEngineering":
                if(bitcoinsTotal >= priceSocialEngineering && levelBreakSecurity >= 10){
                    levelSocialEngineering ++
                    bitcoinsTotal = bitcoinsTotal - priceSocialEngineering ;
                    bpsSocialEngineering =  levelSocialEngineering*0.1 +  bonusRestart;
                    priceSocialEngineering = 17.5  * Math.pow(1.08,levelSocialEngineering);
                    settingText("socialEngineering", levelSocialEngineering,bpsSocialEngineering, priceSocialEngineering, .05 )
                }
                break;
            case "cybernet":
                if(bitcoinsTotal >= priceCybernet && levelBreakSecurity >= 10){
                    levelCybernet ++
                    bitcoinsTotal = bitcoinsTotal - priceCybernet ;
                    bpsCybernet =  levelCybernet*0.5 +  bonusRestart;
                    priceCybernet = 20  * Math.pow(1.08,levelCybernet);
                    settingText("cybernet", levelCybernet,bpsCybernet, priceCybernet, .5 )
                }
                break;
            case "phishing":
                if(bitcoinsTotal >= pricePhishing && levelSocialEngineering >= 25){
                    levelPhishing ++
                    bitcoinsTotal = bitcoinsTotal - pricePhishing ;
                    bpsPhishing = levelPhishing*1.4 +  bonusRestart;
                    pricePhishing = 120 * Math.pow(1.10,levelPhishing);
                    settingText("phishing", levelPhishing,bpsPhishing, pricePhishing, 1.4 )
                }
                break;
            case "trojan":
                if(bitcoinsTotal >= priceTrojan && levelCybernet >= 25){
                    levelTrojan ++
                    bitcoinsTotal = bitcoinsTotal - priceTrojan ;
                    bpsTrojan = levelTrojan*1.5 +  bonusRestart;
                    priceTrojan = 300  * Math.pow(1.10,levelTrojan);
                    settingText("trojan", levelTrojan,bpsTrojan, priceTrojan, 1.5 )
            }
                break;
            case "spam":
                if(bitcoinsTotal >= priceSpam && levelSocialEngineering >= 10){
                    levelSpam ++
                    bitcoinsTotal = bitcoinsTotal - priceSpam ;
                    bpsSpam = levelSpam*0.8+  bonusRestart;
                    priceSpam = 90  * Math.pow(1.10,levelSpam);
                    settingText("spam", levelSpam,bpsSpam, priceSpam, .8 )
                }
                break;
            case "spyware":
                if(bitcoinsTotal >= priceSpyware && levelCybernet >= 10){
                    levelSpyware ++
                    bitcoinsTotal = bitcoinsTotal - priceSpyware ;
                    bpsSpyware =levelSpyware*0.9 +  bonusRestart;
                    priceSpyware = 110  * Math.pow(1.10,levelSpyware);
                    settingText("spyware", levelSpyware,bpsSpyware, priceSpyware, .9 )
                }
                break;
            case "ransomware":
                if(bitcoinsTotal >= priceRansomware && levelPhishing >= 50 && levelTrojan >= 50){
                    levelRansomware ++
                    bitcoinsTotal = bitcoinsTotal - priceRansomware ;
                    bpsRansomware =levelRansomware*4 +  bonusRestart;
                    priceRansomware =  1000  * Math.pow(1.15,levelRansomware);settingText("ransomware", levelRansomware,bpsRansomware, priceRansomware, 4 )
                }
                break;
            case "botnet":
                if(bitcoinsTotal >= priceBotnet && levelRansomware >= 100){
                    levelBotnet ++
                    bitcoinsTotal = bitcoinsTotal - priceBotnet ;
                    bpsBotnet = levelBotnet*20 +  bonusRestart;
                    priceBotnet =  10000  * Math.pow(1.20,levelBotnet);
                    settingText("botnet", levelBotnet,bpsBotnet, priceBotnet, 20 )
                }
                break;
            default:
                break;
        }


        
    })
}

function restart(btnRestart){
    btnRestart.on('pointerup', ()=> {

        nbRestart++;
        bonusRestart = bonusRestart+10;
        bitcoinsTotal = 0;
        bpsMining =  bpsBreakSecurity =
        bpsSocialEngineering =  bpsCybernet =
        bpsPhishing =  bpsTrojan =  bpsSpam =
        bpsSpyware =  bpsRansomware =  bpsBotnet = 0;

        levelMining = 1;
        levelBreakSecurity =
        levelSocialEngineering =  levelCybernet =
        levelPhishing =  levelTrojan =  levelSpam =
        levelSpyware =  levelRansomware =  levelBotnet = 0;
        console.log(nbRestart)
    })
}




