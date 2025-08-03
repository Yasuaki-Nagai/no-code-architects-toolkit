#!/bin/bash

# ########## Fonts ##########

# 源暎エムゴ
GenEiMGothic=GenEiMGothic2-Black.ttf

# 全員集合ポップ
ZeninShugoPop=ZeninShugoPopV3.ttf

# 玉ねぎ楷書「激」
TmanegiKaishoGeki=TmanegiKaishoGekiV7.ttf

# 装甲明朝
SoukouMincho=SoukouMincho.ttf

# ロックンロールOne
RocknRollOne=RocknRollOne-Regular.ttf

# ニコカ
Nicoca=nicoca_v2-5.ttf

# 源界明朝
GenkaiMincho=genkai-mincho.ttf

# 刻明朝
KokuMincho=font_1_kokumr_1_00_rls.ttf

# 刻ゴシック
KokuGothic=font_1_kokugl_1_15_rls.ttf

# ほのか新明朝
HonokaShinMincho=Honoka_Shin_Mincho_L.otf

# ドキドキファンタジア
DokiDokiFantasia=DokiDokiFantasia.otf

# コーポレート・ロゴ
CorporateLogo=Corporate-Logo-Bold-ver3.otf

# デラゴシック
DelaGothic=DelaGothicOne-Regular.ttf

# ########## Env ##########
LocalFontPath="fonts/"
ContainerFontPath="no-code-architects-toolkit-ncat-1:/usr/share/fonts/custom/"

# ########## Commands ##########
docker cp ${LocalFontPath}${GenEiMGothic} ${ContainerFontPath}${GenEiMGothic}
# docker cp ${LocalFontPath}${ZeninShugoPop} ${ContainerFontPath}${ZeninShugoPop}
# docker cp ${LocalFontPath}${TmanegiKaishoGeki} ${ContainerFontPath}${TmanegiKaishoGeki}
# docker cp ${LocalFontPath}${SoukouMincho} ${ContainerFontPath}${SoukouMincho}
# docker cp ${LocalFontPath}${RocknRollOne} ${ContainerFontPath}${RocknRollOne}
# docker cp ${LocalFontPath}${Nicoca} ${ContainerFontPath}${Nicoca}
# docker cp ${LocalFontPath}${GenkaiMincho} ${ContainerFontPath}${GenkaiMincho}
docker cp ${LocalFontPath}${KokuMincho} ${ContainerFontPath}${KokuMincho}
# docker cp ${LocalFontPath}${KokuGothic} ${ContainerFontPath}${KokuGothic}
# docker cp ${LocalFontPath}${HonokaShinMincho} ${ContainerFontPath}${HonokaShinMincho}
# docker cp ${LocalFontPath}${DokiDokiFantasia} ${ContainerFontPath}${DokiDokiFantasia}
# docker cp ${LocalFontPath}${CorporateLogo} ${ContainerFontPath}${CorporateLogo}
# docker cp ${LocalFontPath}${DelaGothic} ${ContainerFontPath}${DelaGothic}
docker exec no-code-architects-toolkit-ncat-1 fc-cache -f -v
docker exec no-code-architects-toolkit-ncat-1 fc-list
