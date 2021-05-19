module.exports = {
  title: 'liuhao',
  description: 'A REST and real-time API layer for modern applications',
 // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
 //  thirdPartyComponents: {
 //    fontAwesomeIcons:{
 //      regular:['lightbulb'],  // Regular font awesome icon keys here
 //      solid:[ 'thumbs-up']    // Solid font awesome icon keys here
 //    }
 //  },
  themeConfig: {
    // algolia: {
    //   apiKey: '2835d290e600f7fb583e2b61a74032ba',
    //   indexName: 'feathersjs'
    // },
    // logo: '/img/feathers-logo-wide.png',
    // repo: 'feathersjs/feathers',
    // docsRepo: 'feathersjs/docs',
    // docsBranch: 'crow',
    // editLinks: true,
    sidebarDepth: 3,
     sidebar: {
       '/js/': [{
         title: 'JS笔记',
         collapsable: true,
         children: [
           'dataType.md',
           'ArrayMethods.md',
           'StringMethods.md',
           'ObjectMethods.md',
           'ArrayUnique.md',
           'model.md',
            'ts.md',
            'lodash.md'
         ]
       }],
        '/css/': [{
         title: 'css笔记',
         collapsable: true,
         children: [
           'flex.md'
         ]
       }],
       '/vue/': [{
         title: 'vue笔记',
         collapsable: true,
         children: [
          'component.md',
           'slot.md',
           'mixin.md',
           'vuex.md'
         ]
       }],
       '/wx/': [{
         title: '小程序笔记',
         collapsable: true,
         children: [
           'components.md'
         ]
       }],
        '/react/': [{
         title: 'react笔记',
         collapsable: true,
         children: [
         'redux.md'
         ]
       }],
        '/node/': [{
         title: 'node笔记',
         collapsable: true,
         children: [
            'mysql.md',
            'https.md',
            'ws.md'
         ]
       }],
    //   '/guides/': [{
    //     title: 'The Feathers guide',
    //     collapsable: false,
    //     children: [
    //       'basics/setup.md',
    //       'basics/starting.md',
    //       'basics/generator.md',
    //       'basics/services.md',
    //       'basics/hooks.md',
    //       'basics/authentication.md',
    //       'basics/frontend.md',
    //       'basics/testing.md'
    //     ]
    //   }, 'frameworks.md', 'security.md', 'migrating.md'],
      // '/help/': [{
      //   title: 'Help',
      //   collapsable: false,
      //   children: [
      //     '/help/',
      //     '/help/faq.md'
      //   ]
      // }],
      // '/api/': [{
      //   title: 'Core',
      //   collapsable: false,
      //   children: [
      //     'application.md',
      //     'services.md',
      //     'hooks.md',
      //     'events.md',
      //     'errors.md',
      //     'configuration.md'
      //   ]
      // }, {
      //   title: 'Transports',
      //   collapsable: false,
      //   children: [
      //     'express.md',
      //     'socketio.md',
      //     'primus.md',
      //     'channels.md'
      //   ]
      // }, {
      //   title: 'Client',
      //   collapsable: false,
      //   children: [
      //     'client.md',
      //     'client/rest.md',
      //     'client/socketio.md',
      //     'client/primus.md'
      //   ]
      // }, {
      //   title: 'Authentication',
      //   collapsable: false,
      //   children: [
      //     'authentication/',
      //     'authentication/service.md',
      //     'authentication/strategy.md',
      //     'authentication/hook.md',
      //     'authentication/jwt.md',
      //     'authentication/local.md',
      //     'authentication/oauth.md',
      //     'authentication/client.md'
      //   ]
      // }, {
      //   title: 'Databases',
      //   collapsable: false,
      //   children: [
      //     'databases/adapters.md',
      //     'databases/common.md',
      //     'databases/querying.md'
      //   ],
      // }],
      // '/cookbook/': [{
      //   title: 'General',
      //   collapsable: false,
      //   children: [
      //     'general/scaling.md'
      //   ]
      // }, {
      //   title: 'Authentication',
      //   collapsable: false,
      //   children: [
      //     'authentication/anonymous.md',
      //     'authentication/apiKey.md',
      //     'authentication/auth0.md',
      //     'authentication/facebook.md',
      //     'authentication/google.md',
      //     'authentication/firebase.md',
      //     'authentication/_discord.md',
      //     'authentication/stateless.md',
      //     'authentication/revoke-jwt.md'
      //   ]
      // }, {
      //   title: 'Express',
      //   collapsable: false,
      //   children: [
      //     'express/file-uploading.md',
      //     'express/view-engine.md'
      //   ]
      // }, {
      //   title: 'Deployment',
      //   collapsable: false,
      //   children: [
      //     'deploy/docker.md'
      //   ]
      // }]
    },
    nav: [
      { text: 'JavaScript', link: '/js/dataType.md' },
      { text: 'Html', link: '/html/' },
      { text: 'Css', link: '/css/flex.md' },
      { text: 'Vue', link: '/vue/slot.md' },
      { text: 'React', link: '/react/redux.md' },
      { text: '小程序', link: '/wx/components.md' },
      { text: 'Node', link: '/node/mysql.md' },
      // { text: 'Others', link: '/vue/slot.md' },
      // {
      //   text: 'Ecosystem',
      //   items: [{
      //     text: 'Awesome Feathersjs',
      //     link: 'https://github.com/feathersjs/awesome-feathersjs'
      //   }, {
      //     text: 'YouTube Playlist',
      //     link: 'https://www.youtube.com/playlist?list=PLwSdIiqnDlf_lb5y1liQK2OW5daXYgKOe'
      //   }, {
      //     text: 'Feathers VueX',
      //     link: 'https://vuex.feathersjs.com/'
      //   }, {
      //     text: 'Common Hooks',
      //     link: 'https://hooks-common.feathersjs.com/'
      //   }, {
      //     text: 'Other versions',
      //     items: [{
      //       text: 'Dove (v5, next)',
      //       link: 'https://dove.docs.feathersjs.com/'
      //     }, {
      //       text: 'Buzzard (v3)',
      //       link: 'https://buzzard.docs.feathersjs.com/'
      //     }, {
      //       text: 'Auk (v2)',
      //       link: 'https://auk.docs.feathersjs.com/'
      //     }]
      //   }]
      // }
    ]
  }
};
