rd "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\okY+ZeM3BQA=\behavior_packs\Miraculous" /s/q
rd "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\okY+ZeM3BQA=\resource_packs\Miraculous" /s/q
mkdir "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\okY+ZeM3BQA=\behavior_packs\Miraculous"
mkdir "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\okY+ZeM3BQA=\resource_packs\Miraculous"
robocopy mcr_BP "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\okY+ZeM3BQA=\behavior_packs\Miraculous" /mir
robocopy mcr_RP "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\okY+ZeM3BQA=\resource_packs\Miraculous" /mir
