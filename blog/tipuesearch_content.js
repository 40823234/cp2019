var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"./pages/about/"},{"title":"2019 期中作業","text":"","tags":"Misc","url":"./2019-Fall-Win10-1107.html"},{"title":"2019 Fall CP 課程","text":"2019 Fall 一開始, 1903 版的 Windows 10 就大舉更新, 除了逐步去掉先前許多舊版的設定視窗, 也將系統的指令搜尋與 App 應用程式進行綁定. 許多採用可攜設定的程式執行流程, 隨著更新進程的推展, 必須因應修改才可以正常運作. 為何要使用可攜系統 自從 1995 年 Windows 95 與 Solidworks 95 在個人電腦中推出, 至今二十幾年, 幾乎所有與機械設計相關的單機套件的操作系統都在 Windows 上, 但是一旦需要建構所謂的 client-server 或雲端機械設計運算系統, 以 Ubuntu 為主的 Linux 伺服器顯然在成本與效益上, 擁有許多優勢. 因此長遠來看, 任何在 Windows 上操作的計算機運算流程, 都必須設法能夠在 Windows 與 Linux 上運作. 在 Windows 10 環境中使用可攜系統的原因, 主要是讓計算機程式課程中所使用的工具, 都可以放在 USB 3.0 規格以上的隨身碟或隨身硬碟上運作, 而第二個原因則是希望這些工具都能相容於 Linux 系統. Windows 10 更新所造成的問題 電腦輔助設計室中的第三磁區, 在完全沒有還原保護的情況下, 每一台電腦每次開機都會執行 Windows 10 的更新檢查, 然後依照更新期程的排定, 逐步更新. 因此, 從實際面來看, 每一台電腦的設定與內容並非完全相同. 使用者在開機後, 就必須根據電腦的現況進行因應. 而電腦操作系統更新造成的問題在於: 各電腦的實際現況與下載可攜系統當時製作環境不同, 因此部分設定必須配合修改後, 才可正常運作. 系統 path 搜尋路徑的修改 Windows 10 1903 版次在 Fall 開學後, 將 Python 執行路徑的搜尋納入系統 path 後, 假如所使用的 Windows 10 並未安裝 Python 解譯套件, 以系統內定 path 搜尋後, 會自動將使用者導引到 Python App 的安裝畫面. 這樣的改變, 將會對原先可攜程式系統造成兩種影響, 第一的影響是: start.bat 中以系統 path 設為第一優先下, 使用者在命令列中輸入 python 解譯器指令時, Windows 10 就會將使用者帶到要求 Python App 安裝的畫面. 因應修改的方法, 就是將 start.bat 中操作系統 path 優先權去除, 也就是 set path=%path%;... 中的 %path% 放到最後順序, 或者乾脆刪除. 第二項影響則是對 SciTE中 Python 的程式執行. 因為 2019 Fall 開始隨身程式系統製作時 path 可綁訂至隨身系統中的 Python 3.7.3, 因此 SciTE 中有關 .py 程式執行設定, 直接設為 path 中, 以 pythonw.exe 解譯 .py 程式, 一旦 path 無法指到隨身系統中的 python 解譯系統, SciTE 中的 .py 程式執行, 就必須明確指定 Python 3.7.3 所在的指令路徑. 也就是帶出 Options -> python.properties 設定檔案, 然後進行修改: if PLAT_WIN command.go.*.py=Y:\\cad\\201906_fall\\data\\py373\\pythonw -u \"$(FileNameExt)\" command.go.subsystem.*.py=1 command.go.*.pyw=pythonw -u \"$(FileNameExt)\" command.go.subsystem.*.pyw=1 command.build.SConscript=scons.bat --up . command.build.SConstruct=scons.bat . python 執行路徑的修改 除了採用明碼進行設定的 python.properties 必須配合修改外, 以二位元碼設定的 py373/Scripts/pelican.exe 也必須利用 hxd 進行 python 執行路徑字串置換修改. 安裝 python 新增模組 當使用者在執行 python 解譯時, 若碰到缺少特定模組時, 可以利用 python -m pip install flask_cors 進行安裝. Pelican 設定修改 theme/attila/templates/base.html 中必須進行下列修改: (function(){ var corecss = document.createElement('link'); var themecss = document.createElement('link'); var corecssurl = \"./../cmsimde/static/syntaxhighlighter/css/shCore.css\"; if ( corecss.setAttribute ) { corecss.setAttribute( \"rel\", \"stylesheet\" ); corecss.setAttribute( \"type\", \"text/css\" ); corecss.setAttribute( \"href\", corecssurl ); } else { corecss.rel = \"stylesheet\"; corecss.href = corecssurl; } document.getElementsByTagName(\"head\")[0].insertBefore( corecss, document.getElementById(\"syntaxhighlighteranchor\") ); var themecssurl = \"./../cmsimde/static/syntaxhighlighter/css/shThemeDefault.css?ver=3.0.9b\"; if ( themecss.setAttribute ) { themecss.setAttribute( \"rel\", \"stylesheet\" ); themecss.setAttribute( \"type\", \"text/css\" ); themecss.setAttribute( \"href\", themecssurl ); } else { themecss.rel = \"stylesheet\"; themecss.href = themecssurl; } //document.getElementById(\"syntaxhighlighteranchor\").appendChild(themecss); document.getElementsByTagName(\"head\")[0].insertBefore( themecss, document.getElementById(\"syntaxhighlighteranchor\") ); })(); SyntaxHighlighter.config.strings.expandSource = '+ expand source'; SyntaxHighlighter.config.strings.help = '?'; SyntaxHighlighter.config.strings.alert = 'SyntaxHighlighter\\n\\n'; SyntaxHighlighter.config.strings.noBrush = 'Can\\'t find brush for: '; SyntaxHighlighter.config.strings.brushNotHtmlScript = 'Brush wasn\\'t configured for html-script option: '; SyntaxHighlighter.defaults['pad-line-numbers'] = false; SyntaxHighlighter.defaults['toolbar'] = false; SyntaxHighlighter.all();","tags":"Misc","url":"./2019-Fall-Win10-1903.html"},{"title":"2018 Fall CP 課程","text":"2018 Fall 一開始, 在一台已經 10 年的 32 位元的 Windows 7 操作系統中工作. 可攜的 Python 3.7.0 仍然可以配置, Leo Editor、PyQt5、flask、Markdown、pelican 與 bs4 的安裝, 也都沒有問題. 只有 Eric6 因為缺少必要模組與 Python 3.7.0 對應的 pyqt5-tools, 因此沒有安裝. 電腦規格 目前系上已經沒有 32 位元 Windows 操作系統的電腦, 所以先前只要有學生提到所使用的電腦是舊型 32 位元的 Windows XP 或 Windows 7, 都無法提供相應的可攜程式系統. 但是, 當您桌上就只一台早期 Sony 推出的 VGC-LM26T 電腦, 採用 Intel core 2 Duo T8100 2.1 GHz 裝載 32 位元 Windows 7, 記憶體只有 2GB 的老舊電腦. 夠用嗎? 當然可以, 使用的是特別製作的 32 位元可攜系統 , 除了不支援 Eric6 之外, 其餘功能都與 64 位元的 p37 相同. 工作流程 從 2018 Fall 開始, 前半學期希望每位計算機程課程的學員, 都能透過 2018 計算機程式教材 內容, 深入學習 Python 3 各種程式語法, 利用 CMSimfly 、 Pelican 與 Reveal.js , 熟悉如何在 Github 配置自己的網站、網誌與網際簡報系統. 使用時, 啟動隨身系統的 start.bat, 利用命令列指令, git clone https://github.com/mdecourse/2018fall, 然後將內容配置在各自的 Github 帳號下. 程式專案 早在 1999 年, 就已經開始進行所謂 網際機械設計資源中心 的構建, 想像中的資源中心是一套網際專家系統, 包含各式機械設計流程中所需的模組, 全部依附在一個相對穩定, 可以持續改進的核心架構下, 類似 docassemble 的一套系統. 將近二十年過去, 網際機械設計資源中心 始終仍只有片段系統, 其中包含 CMSimfly 、 Pygrouf 與 Pyslvs ( Pyslvs 手冊 )等相關專案. 就如同 如何寫出有用的程式? 一文中所述, \"沒有興趣不要來念資工\" 是一句非常貼切的警語, 當學生對於程式設計提不起興趣, 沒有將所學的各式語法、資料結構與演算法, 套用在自己非常有興趣的領域中, 用來解決各式問題的話, 日復一日, 我們還是寫不出任何有用的程式! 早該起頭的重要工作 計算機程式的重要性 其實已經無需爭辯, 人類未來的許多工作都是透過網路與數位運算達成, 既知趨勢如此, 每一位工程師就該越早起頭原本就該進行的重要工作, 透過計算機程式來解決問題, 構築一個值得長期投注心力的程式專案.","tags":"Misc","url":"./2018-Fall-32-bit-Windows.html"}]};