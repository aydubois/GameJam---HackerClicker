let bK

let blockMin = blockBS = blockSE = blockCyb = blockPhi = blockSpa = blockSpy= blockTro = blockRans = 1
let nextAngleChangeTime = 1000;

let bitcoinsTotal = 100000;
let priceMining = .5, priceBreakSecurity = 3.5, priceSocialEngineering  = 17.5, priceCybernet = 20, pricePhishing = 120, priceTrojan = 140, priceSpam = 90, priceSpyware = 300, priceRansomware = 1000, priceBotnet =10000;

let bpsMining = 0.1, bpsBreakSecurity = 0, bpsSocialEngineering  = 0, bpsCybernet = 0, bpsPhishing = 0, bpsTrojan = 0, bpsSpam = 0, bpsSpyware = 0, bpsRansomware = 0, bpsBotnet =0;
let levelMining = 1, levelBreakSecurity = 0, levelSocialEngineering = 0, levelCybernet = 0, levelPhishing = 0, levelTrojan = 0, levelSpam = 0, levelSpyware = 0, levelRansomware = 0, levelBotnet = 0;
let bonusRestart = 0;
let nbRestart = 0;
let background, bitcoin;
let panelBackground, panelTree;
let graphics, graphics2;
let backgroundAnim;
let btnBreakSecu, btnSocialEnge, btnCybernet, btnPhishing, btnSpam, btnTrojan, btnSpyware, btnRansomware, btnBotnet, btnMining;
let btnRestart;
let containerBtnTree;
let textT;
let textRestart;
let textBitcoinPerSecond;
let totalBps = ( bpsPhishing + bpsRansomware 
    + bpsSocialEngineering + bpsSpam + bpsSpyware + bpsTrojan + bpsBotnet +
    bpsBreakSecurity + bpsCybernet);
let panelOk = 0; //Ouverture fermeture du panneau
let nbF = 0;

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


    //bitcoin
    this.load.image('bitcoin', 'assets/bitcoin.png');
    //arbre
    // this.load.image('btnMining', 'assets/btn/btnMining.png');
    // this.load.image('btnBreakSecu', 'assets/btn/btnBreakSecu.png');
    // this.load.image('btnSocialEnge', 'assets/btn/btnSocialEnge.png');
    // this.load.image('btnCybernet', 'assets/btn/btnCybernet.png');
    // this.load.image('btnPhishing', 'assets/btn/btnPhishing.png');
    // this.load.image('btnSpam', 'assets/btn/btnSpam.png');
    // this.load.image('btnTrojan', 'assets/btn/btnTrojan.png');
    // this.load.image('btnSpyware', 'assets/btn/btnSpyware.png');
    // this.load.image('btnRansomware', 'assets/btn/btnRansomware.png');
    // this.load.image('btnBotnet', 'assets/btn/btnBotnet.png');
    this.load.spritesheet('btnGlobal', 'assets/btnGlobal.png', { frameWidth: 60, frameHeight: 60, endFrame: 44 });
    // this.load.image('btnMining', 'assets/btn/btnMining.png');
    // this.load.image('btnBreakSecu', 'assets/btn/btnMining.png');
    // this.load.image('btnSocialEnge', 'assets/btn/btnMining.png');
    // this.load.image('btnCybernet', 'assets/btn/btnMining.png');
    // this.load.image('btnPhishing', 'assets/btn/btnMining.png');
    // this.load.image('btnSpam', 'assets/btn/btnMining.png');
    // this.load.image('btnTrojan', 'assets/btn/btnMining.png');
    // this.load.image('btnSpyware', 'assets/btn/btnMining.png');
    // this.load.image('btnRansomware', 'assets/btn/btnMining.png');
    // this.load.image('btnBotnet', 'assets/btn/btnMining.png');

    this.load.image('btnRestart', 'assets/btn/btnMining.png');

    panelBackground = new Phaser.Geom.Rectangle(0, 45, 445, 723);
    panelBottomBackground = new Phaser.Geom.Rectangle(5, 638, 435, 120);
    this.load.image('panelTree', ('assets/panelTree.png'));
}

function create() {
    this.physics.world.setFPS(30)
    console.log(this.physics)
    background = this.add.image(450,400,"bkground").setScale(2.85, 2.85).setInteractive();
    bK = this.add.group();
    backgroundAnim = this.add.sprite(450,400, 'frame-1').setScale(2.85, 2.85);
    
    graphics = this.add.graphics();
    graphics.fillStyle(0x404040, .75);   // color: 0xRRGGBB
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

    // this.anims.create({
    //     key: 'frameClick',
    //     frames: [
    //         { key: 'frame-01' },
    //         { key: 'frame-05' },
    //         { key: 'frame-10' },
    //         { key: 'frame-15' },
    //         { key: 'frame-20' }
    //     ],
    //     frameRate: 10,
    //     repeat: 0
    // });
    
    btnRestart = this.add.sprite(36,81, "btnGlobal",40 ).setInteractive();

    //sprites
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

    //sprite événements
    // function updateText(btn, level, price, bps) {
    //     btn.on('pointerover', () => {
    //         btn.setFrame(1);
    //         textT1.setText('Mining'+' - Niv: '+ level);
    //         textT2.setText('Niv supérieur: '+price+'B');
    //         textT3.setText('Bps actuel: '+bps);
    //         textT4.setText('Bps suivant: '+(bps+0.1));
    //     } )
    //     .on('pointerout', () => {
    //         btn.setFrame(0);
    //         textT1.setText('');
    //         textT2.setText('');
    //         textT3.setText('');
    //         textT4.setText('');
    //     })
    //     .on('pointerdown', () => {btn.setFrame(2);})
    //     .on('pointerup', () => {btn.setFrame(1);
    //         textT1.setText('Mining'+' - Niv: '+ level);
    //         textT2.setText('Niv supérieur: '+price+'B');
    //         textT3.setText('Bps actuel: '+bps);
    //         textT4.setText('Bps suivant: '+(bps+0.01));
    //     });
    // }
    // updateText(btnMining, levelMining, priceMining, bpsMining);

    btnMining.on('pointerover', () => {
        if(bitcoinsTotal >= priceMining){
            btnMining.setFrame(37);
        }else{
            btnMining.setFrame(39);
            blockMin = 1;
        }
        textT1.setText('Mining'+' - Niv: '+ levelMining.toFixed(2));
        textT2.setText('Prix Niv supérieur: '+priceMining.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsMining.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsMining+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        if(bitcoinsTotal >= priceMining){
            btnMining.setFrame(36);
        }else{
            btnMining.setFrame(39);
            blockMin = 1;
        }
    })
    .on('pointerdown', () => {
        if(bitcoinsTotal >= priceMining){
            btnMining.setFrame(38);
        }else{
            btnMining.setFrame(39);
            blockMin = 1;
        }
    })
    .on('pointerup', () => {
        textT1.setText('Mining'+' - Niv: '+ levelMining.toFixed(2));
        textT2.setText('Niv supérieur: '+priceMining.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsMining.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsMining+0.01).toFixed(2));
        if(bitcoinsTotal >= priceMining){
            btnMining.setFrame(37);
        }else{
            btnMining.setFrame(39);
            blockMin = 1;
        }

    });
    
    btnBreakSecu.on('pointerover', () => {
        if(levelMining >= 10 && bitcoinsTotal >= priceBreakSecurity){
            btnBreakSecu.setFrame(1);
        }else{
            btnBreakSecu.setFrame(3);
            textT2.setText('Niv supérieur: '+priceBreakSecurity.toFixed(2)+'B');
            blockBS = 1
        }
        textT1.setText('Break Security'+' - Niv: '+ levelBreakSecurity.toFixed(2));
        textT2.setText('Niv supérieur: '+priceBreakSecurity.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsBreakSecurity.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsBreakSecurity+0.1).toFixed(2));
    } )
    
    .on('pointerout', () => {
        levelMining >= 10  && bitcoinsTotal >= priceBreakSecurity? btnBreakSecu.setFrame(0) : btnBreakSecu.setFrame(3), blockBS = 1 ;
    })
    .on('pointerdown', () => {
        levelMining >= 10  && bitcoinsTotal >= priceBreakSecurity ? btnBreakSecu.setFrame(2) : btnBreakSecu.setFrame(3), blockBS = 1 ;
    })
    .on('pointerup', () => {
        if(levelMining >= 10  && bitcoinsTotal >= priceBreakSecurity){
            btnBreakSecu.setFrame(1);
        }else{
            btnBreakSecu.setFrame(3);
            blockBS = 1 
        }
        textT1.setText('Break Security'+' - Niv: '+ levelBreakSecurity.toFixed(2));
        textT2.setText('Niv supérieur: '+priceBreakSecurity.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsBreakSecurity.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsBreakSecurity+0.1).toFixed(2));
    })
    

    btnSocialEnge.on('pointerover', () => {
        if(levelBreakSecurity >= 10  && bitcoinsTotal >= priceSocialEngineering){
            btnSocialEnge.setFrame(5);
        }else {
            btnSocialEnge.setFrame(7);
            blockSE = 1;
        }
        textT1.setText('Social Engineering'+' - Niv: '+ levelSocialEngineering.toFixed(2));
        textT2.setText('Niv supérieur: '+priceSocialEngineering.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsSocialEngineering.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsSocialEngineering+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        levelBreakSecurity >= 10   && bitcoinsTotal >= priceSocialEngineering? btnSocialEnge.setFrame(4) : btnSocialEnge.setFrame(7), blockSE = 1;
    })
    .on('pointerdown', () => {
        levelBreakSecurity >= 10   && bitcoinsTotal >= priceSocialEngineering? btnSocialEnge.setFrame(6) : btnSocialEnge.setFrame(7), blockSE = 1;
    })
    .on('pointerup', () => {
        if(levelBreakSecurity >= 10  && bitcoinsTotal >= priceSocialEngineering){
            btnSocialEnge.setFrame(5);
        }else {
            btnSocialEnge.setFrame(7);
            blockSE = 1;
        }
        textT1.setText('Social Engineering'+' - Niv: '+ levelSocialEngineering.toFixed(2));
        textT2.setText('Niv supérieur: '+priceSocialEngineering.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsSocialEngineering.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsSocialEngineering+0.1).toFixed(2));
    });

    btnCybernet.on('pointerover', () => {
        if(levelBreakSecurity >= 10  && bitcoinsTotal >= priceCybernet){
            btnCybernet.setFrame(9);
        }else {
            btnCybernet.setFrame(11);
            blockCyb = 1;
        }
        textT1.setText('Cybernet'+' - Niv: '+ levelCybernet.toFixed(2));
        textT2.setText('Niv supérieur: '+priceCybernet.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsCybernet.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsCybernet+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        levelBreakSecurity >= 10  && bitcoinsTotal >= priceCybernet? btnCybernet.setFrame(8) : btnCybernet.setFrame(11), blockCyb = 1;
    })
    .on('pointerdown', () => {
        levelBreakSecurity >= 10  && bitcoinsTotal >= priceCybernet? btnCybernet.setFrame(10) : btnCybernet.setFrame(11), blockCyb = 1;
    })
    .on('pointerup', () => {
        if(levelBreakSecurity >= 10 && bitcoinsTotal >= priceCybernet){
            btnCybernet.setFrame(9);
        }else {
            btnCybernet.setFrame(11);
            blockCyb = 1;
        }
        textT1.setText('Cybernet'+' - Niv: '+ levelCybernet.toFixed(2));
        textT2.setText('Niv supérieur: '+priceCybernet.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsCybernet.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsCybernet+0.1).toFixed(2));
    });

    btnPhishing.on('pointerover', () => {
        if(levelSocialEngineering >= 25 && bitcoinsTotal >= pricePhishing){
            btnPhishing.setFrame(17);
        }else {
            btnPhishing.setFrame(19);
            blockPhi = 1;
        }
        textT1.setText('Phishing'+' - Niv: '+ levelPhishing.toFixed(2));
        textT2.setText('Niv supérieur: '+pricePhishing.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsPhishing.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsPhishing+0.1).toFixed(2));
    })
    .on('pointerout', () => {
        levelSocialEngineering >= 25 && bitcoinsTotal >= pricePhishing ? btnPhishing.setFrame(16) : btnPhishing.setFrame(19),blockPhi = 1;
    })
    .on('pointerdown', () => {
        levelSocialEngineering >= 25 && bitcoinsTotal >= pricePhishing ? btnPhishing.setFrame(18) : btnPhishing.setFrame(19),blockPhi = 1;
    })
    .on('pointerup', () => {
        if(levelSocialEngineering >= 25 && bitcoinsTotal >= pricePhishing){
        btnPhishing.setFrame(17);
        }else {
            btnPhishing.setFrame(19);
            blockPhi = 1
        }
        textT1.setText('Phishing'+' - Niv: '+ levelPhishing.toFixed(2));
        textT2.setText('Niv supérieur: '+pricePhishing.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsPhishing.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsPhishing+0.1).toFixed(2));
    });
    
    btnSpam.on('pointerover', () => {
        if(levelSocialEngineering >= 10 && bitcoinsTotal >= priceSpam){
            btnSpam.setFrame(13);
        }else {
            btnSpam.setFrame(15);
            blockSpa = 1;
        }
        textT1.setText('Spam'+' - Niv: '+ levelSpam.toFixed(2));
        textT2.setText('Niv supérieur: '+priceSpam.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsSpam.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsSpam+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        levelSocialEngineering >= 10 && bitcoinsTotal >= priceSpam ? btnSpam.setFrame(12) : btnSpam.setFrame(15), blockSpa = 1;
    })
    .on('pointerdown', () => {
        levelSocialEngineering >= 10 && bitcoinsTotal >= priceSpam ? btnSpam.setFrame(14) : btnSpam.setFrame(15), blockSpa = 1;
    })
    .on('pointerup', () => {
        if(levelSocialEngineering >= 10 && bitcoinsTotal >= priceSpam){
            btnSpam.setFrame(13);
        }else {
            btnSpam.setFrame(15);
            blockSpa = 1
        }
        textT1.setText('Spam'+' - Niv: '+ levelSpam.toFixed(2));
        textT2.setText('Niv supérieur: '+priceSpam.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsSpam.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsSpam+0.1).toFixed(2));
    });
    
    btnTrojan.on('pointerover', () => {
        if(levelCybernet >= 25 && bitcoinsTotal >= priceTrojan){
            btnTrojan.setFrame(21);
        }else{
            btnTrojan.setFrame(23);
            blockTro = 1;
        }
        textT1.setText('Trojan'+' - Niv: '+ levelTrojan.toFixed(2));
        textT2.setText('Niv supérieur: '+priceTrojan.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsTrojan.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsTrojan+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        levelCybernet >= 25 && bitcoinsTotal >= priceTrojan ? btnTrojan.setFrame(20) : btnTrojan.setFrame(23), blockTro = 1;
    })
    .on('pointerdown', () => {
        levelCybernet >= 25 && bitcoinsTotal >= priceTrojan ? btnTrojan.setFrame(22) : btnTrojan.setFrame(23), blockTro = 1;
    })
    .on('pointerup', () => {
        if(levelCybernet >= 25 && bitcoinsTotal >= priceTrojan){
            btnTrojan.setFrame(21);
        }else{
            btnTrojan.setFrame(23);
            blockTro = 1
        }
        textT1.setText('Trojan'+' - Niv: '+ levelTrojan.toFixed(2));
        textT2.setText('Niv supérieur: '+priceTrojan.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsTrojan.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsTrojan+0.1).toFixed(2));
    });
    
    btnSpyware.on('pointerover', () => {
        if(levelCybernet >= 10 && bitcoinsTotal >= priceSpyware){
            btnSpyware.setFrame(25);
        }else{
            btnSpyware.setFrame(27);
            blockSpy = 1;
        }
        textT1.setText('Spyware'+' - Niv: '+ levelSpyware.toFixed(2));
        textT2.setText('Niv supérieur: '+priceSpyware.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsSpyware.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsSpyware+0.1).toFixed(2));
        } )
    .on('pointerout', () => {
        levelCybernet >= 10  && bitcoinsTotal >= priceSpyware ? btnSpyware.setFrame(24) : btnSpyware.setFrame(27),blockSpy = 1;
    })
    .on('pointerdown', () => {
        levelCybernet >= 10  && bitcoinsTotal >= priceSpyware ? btnSpyware.setFrame(25) : btnSpyware.setFrame(27),blockSpy = 1;
    })
    .on('pointerup', () => {
        if(levelCybernet >= 10 && bitcoinsTotal >= priceSpyware){
            btnSpyware.setFrame(26);
        }else{
            btnSpyware.setFrame(27);
            blockSpy = 1;
        }
        textT1.setText('Spyware'+' - Niv: '+ levelSpyware.toFixed(2));
        textT2.setText('Niv supérieur: '+priceSpyware.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsSpyware.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsSpyware+0.1).toFixed(2));
    });
    
    btnRansomware.on('pointerover', () => {
        if(levelPhishing >= 50 && levelTrojan >=50  && bitcoinsTotal >= priceRansomware){
            btnRansomware.setFrame(29);
        }else{
            btnRansomware.setFrame(31);
            blockRans = 1;
        }
        textT1.setText('Ransomware'+' - Niv: '+ levelRansomware.toFixed(2));
        textT2.setText('Niv supérieur: '+priceRansomware.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsRansomware.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsRansomware+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        levelPhishing >= 50   && bitcoinsTotal >= priceRansomware && levelTrojan >=50 ? btnRansomware.setFrame(28) : btnRansomware.setFrame(31), blockRans = 1;
    })
        
    .on('pointerdown', () => {
        levelPhishing >= 50   && bitcoinsTotal >= priceRansomware && levelTrojan >=50 ? btnRansomware.setFrame(29) : btnRansomware.setFrame(31), blockRans = 1;
    })
    .on('pointerup', () => {
        if(levelPhishing >= 50 && levelTrojan >=50   && bitcoinsTotal >= priceRansomware){
            btnRansomware.setFrame(29);
        }else{
            btnRansomware.setFrame(31);
            blockRans = 1
        }
        textT1.setText('Ransomware'+' - Niv: '+ levelRansomware.toFixed(2));
        textT2.setText('Niv supérieur: '+priceRansomware.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsRansomware.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsRansomware+0.1).toFixed(2));
    });
    
    btnBotnet.on('pointerover', () => {
        if(levelRansomware >= 100  && bitcoinsTotal >= priceBotnet){

            btnBotnet.setFrame(33);
        }else{
            btnBotnet.setFrame(35);
            blockBot = 1
        }
        textT1.setText('Botnet'+' - Niv: '+ levelBotnet.toFixed(2));
        textT2.setText('Niv supérieur: '+priceBotnet.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsBotnet.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsBotnet+0.1).toFixed(2));
    } )
    .on('pointerout', () => {
        levelRansomware >= 100  && bitcoinsTotal >= priceBotnet ? btnBotnet.setFrame(32) : btnBotnet.setFrame(35), blockBot = 1;
    })
    .on('pointerdown', () => {
        levelRansomware >= 100  && bitcoinsTotal >= priceBotnet ? btnBotnet.setFrame(34) : btnBotnet.setFrame(35), blockBot = 1;

    })
    .on('pointerup', () => {
        if(levelRansomware >= 100  && bitcoinsTotal >= priceBotnet){
            btnBotnet.setFrame(33);
        }else{
            btnBotnet.setFrame(35);
            blockBot = 1;
        }
        textT1.setText('Botnet'+' - Niv: '+ levelBotnet.toFixed(2));
        textT2.setText('Niv supérieur: '+priceBotnet.toFixed(2)+'B');
        textT3.setText('Bps actuel: '+bpsBotnet.toFixed(2));
        textT4.setText('Bps suivant: '+(bpsBotnet+0.1).toFixed(2));
    });

    containerBtnTree = this.add.container(0,0,[btnMining, btnBreakSecu, btnSocialEnge, btnCybernet, btnPhishing, btnSpam, btnTrojan, btnSpyware, btnRansomware, btnBotnet, btnRestart]);
    
    background.on('pointerup', ()=>{
        // backgroundAnim.play('frameClick');
        // var y = Phaser.Math.Between(100, 700)
        // backgroundAnim.texture.frames.key = 'frame-'+nbF;
        // nbF++;
        // if(nbF==24) {
        //     nbF=1;
        // }
        // console.log(nbF);
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
        console.log(bitcoinsTotal)
        
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

    // this.input.on('pointerdown', function (pointer) {
        //     console.log(pointer.x, pointer.y);
        // }, this);
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
        console.log(this.time)

        var timer = this.time.addEvent({
            delay: 100,                // ms
            callback: addBitcoinBps,
            loop: true
        });
        // this.time.events.loop(Phaser.Timer.SECOND * 1, addBitcoinBps, this); 
    }
    function addBitcoinBps(){
        bitcoinsTotal = bitcoinsTotal + ( bpsPhishing + bpsRansomware 
            + bpsSocialEngineering + bpsSpam + bpsSpyware + bpsTrojan + bpsBotnet +
            bpsBreakSecurity + bpsCybernet)/10

    }

    function update(time, delta){

        // if(pointer.isDown && pointer.getDuration() < 100){
        //     // background.destroy();
        //     // background = this.add.image(450,400,"frame-"+nbF).setScale(2.85, 2.85).setInteractive();
        //     backgroundAnim.setFrame('frame-'+nbF);
        //     nbF++;
        //     if(nbF >= 24){nbF = 1}
        //     console.log(nbF)
        // }

        if(pointer.isDown){
            let imageAnim = bK.create(450,400,'frame-'+nbF).setScale(2.85,2.85);
            this.tweens.add({
                targets: imageAnim,
                alpha: { from: 1, to: 0 },
                duration: 300,
                repeat: 0,
            })
            nbF++
            if(nbF >= 24 ){nbF = 1}
        }




       delta = 0.4
        textNumberBitcoin.setText('Bitcoins: '+ bitcoinsTotal.toFixed(2));
        totalBps = bpsPhishing + bpsRansomware 
        + bpsSocialEngineering + bpsSpam + bpsSpyware + bpsTrojan + bpsBotnet +
        bpsBreakSecurity + bpsCybernet;
        textBitcoinPerSecond.setText('Bps: '+ totalBps.toFixed(2));
        textGameTime.setText('Temps de jeu: ' + (time/1000).toFixed(0) + 's')
        textRestart.setText('Restart n° '+nbRestart);

        if( bitcoinsTotal >= priceMining){
            btnMining.setFrame(36)
            blockMin = 0
        }
        if(levelMining >= 10 && blockBS == 1 && bitcoinsTotal >= priceBreakSecurity ){
            btnBreakSecu.setFrame(0)
            blockBS = 0
        }
        if(levelBreakSecurity >= 10 && blockSE == 1 && bitcoinsTotal >= priceSocialEngineering ){
            btnSocialEnge.setFrame(4)
            blockSE = 0
        }
        if(levelBreakSecurity >= 10 && blockCyb == 1 && bitcoinsTotal >= priceCybernet ){
            btnCybernet.setFrame(8)
            blockCyb = 0
        }
        if(levelSocialEngineering >= 25 && blockPhi == 1 && bitcoinsTotal >= pricePhishing ){
            btnPhishing.setFrame(12)
            blockMin = 0
        }
        if(levelSocialEngineering >= 10 && blockSpa == 1 && bitcoinsTotal >= priceSpam ){
            btnSpam.setFrame(16)
            blockSpa = 0
        }
        if(levelCybernet >= 25 && blockTro == 1 && bitcoinsTotal >= priceTrojan ){
            btnTrojan.setFrame(20)
            blockTro = 0
        }
        if(levelCybernet >= 10 && blockSpy == 1 && bitcoinsTotal >= priceSpyware){
            btnSpyware.setFrame(24)
            blockSpy = 0
        }
        if(levelPhishing >= 50 && levelTrojan >=50 && blockRans == 1 && bitcoinsTotal >= priceRansomware){
            btnRansomware.setFrame(32)
            blockRans = 0
        }
        if(levelRansomware >= 100 && blockBot == 1 && bitcoinsTotal >= priceBotnet){
            btnBotnet.setFrame(0)
            blockBot = 0
        }

        if(totalBps > 0 && time > nextAngleChangeTime){
                nextAngleChangeTime = time + 1000;
            let x = Phaser.Math.Between(600, 800)
            let y = Phaser.Math.Between(200, 300)
            delta = 1/30
            let bitcoinAnimClickBPS = bitcoin.create(x,y,'bitcoin').setScale(0.055,0.055);
            this.tweens.add({
                targets: bitcoinAnimClickBPS,
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
                }
                break;
            case "breakSecurity":
                if(bitcoinsTotal >= priceBreakSecurity && levelMining >= 10){
                    levelBreakSecurity ++
                    bitcoinsTotal = bitcoinsTotal - priceBreakSecurity;
                    bpsBreakSecurity = levelBreakSecurity*0.05 + bonusRestart;
                    priceBreakSecurity = 3.5  * Math.pow(1.07,levelBreakSecurity);
                }
                break;
            case "socialEngineering":
                if(bitcoinsTotal >= priceSocialEngineering && levelBreakSecurity >= 10){
                    levelSocialEngineering ++
                    bitcoinsTotal = bitcoinsTotal - priceSocialEngineering ;
                    bpsSocialEngineering =  levelSocialEngineering*0.1 +  bonusRestart;
                    priceSocialEngineering = 17.5  * Math.pow(1.08,levelSocialEngineering);
                }
                break;
            case "cybernet":
                if(bitcoinsTotal >= priceCybernet && levelBreakSecurity >= 10){
                    levelCybernet ++
                    bitcoinsTotal = bitcoinsTotal - priceCybernet ;
                    bpsCybernet =  levelCybernet*0.5 +  bonusRestart;
                    priceCybernet = 20  * Math.pow(1.08,levelCybernet);
                }
                break;
            case "phishing":
                if(bitcoinsTotal >= pricePhishing && levelSocialEngineering >= 25){
                    levelPhishing ++
                    bitcoinsTotal = bitcoinsTotal - pricePhishing ;
                    bpsPhishing = levelPhishing*1 +  bonusRestart;
                    pricePhishing = 120 * Math.pow(1.10,levelPhishing);
                }
                break;
            case "trojan":
                if(bitcoinsTotal >= priceTrojan && levelCybernet >= 25){
                    levelTrojan ++
                    bitcoinsTotal = bitcoinsTotal - priceTrojan ;
                    bpsTrojan = levelTrojan*1.5 +  bonusRestart;
                    priceTrojan = 300  * Math.pow(1.10,levelTrojan);
            }
                break;
            case "spam":
                if(bitcoinsTotal >= priceSpam && levelSocialEngineering >= 10){
                    levelSpam ++
                    bitcoinsTotal = bitcoinsTotal - priceSpam ;
                    bpsSpam = levelSpam*0.01 +  bonusRestart;
                    priceSpam = 90  * Math.pow(1.10,levelSpam);
                }
                break;
            case "spyware":
                if(bitcoinsTotal >= priceSpyware && levelCybernet >= 10){
                    levelSpyware ++
                    bitcoinsTotal = bitcoinsTotal - priceSpyware ;
                    bpsSpyware =levelSpyware*0.9 +  bonusRestart;
                    priceSpyware = 110  * Math.pow(1.10,levelSpyware);
                }
                break;
            case "ransomware":
                if(bitcoinsTotal >= priceRansomware && levelPhishing >= 50 && levelTrojan >= 50){
                    levelRansomware ++
                    bitcoinsTotal = bitcoinsTotal - priceRansomware ;
                    bpsRansomware =levelRansomware*4 +  bonusRestart;
                    priceRansomware =  1000  * Math.pow(1.15,levelRansomware);
                }
                break;
            case "botnet":
                if(bitcoinsTotal >= priceBotnet && levelRansomware >= 100){
                    levelBotnet ++
                    bitcoinsTotal = bitcoinsTotal - priceBotnet ;
                    bpsBotnet = levelBotnet*20 +  bonusRestart;
                    priceBotnet =  10000  * Math.pow(1.20,levelBotnet);
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




