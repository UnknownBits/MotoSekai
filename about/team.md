---
layout: doc
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
const teams = [
  { 
    avatar: 'https://avatars.githubusercontent.com/u/136256448',
    name: 'UnknownBits',
    title: '开发组',
    links: [
      { icon: 'github', link: 'https://github.com/UnknownBits' },
    ]
  },
]
const members = [
  { 
    avatar: 'https://avatars.githubusercontent.com/u/123872626',
    name: 'Pikaqu',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Mrpikaqu' },
    ]
  },
  { 
    avatar: 'https://avatars.githubusercontent.com/u/81061386',
    name: '雲陌殇',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/HuaJiKing402' },
    ]
  },
  { 
    avatar: 'https://avatars.githubusercontent.com/u/121035454',
    name: '轩某Rikka',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/XuanRikka' },
    ]
  },
]
</script>

# 关于团队
## 团队成员
  <VPTeamMembers :members="members"/>

## 辅助开发组
  <VPTeamMembers :members="teams"/>