'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARScene,
  ViroMaterials,
  ViroAmbientLight,
  ViroSpotLight,
  ViroDirectionalLight,
  ViroAnimations,
  ViroParticleEmitter,
  ViroSurface,
  Viro3DObject,
  ViroNode,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({
  getInitialState() {
    return {
      runAnimation:true,
    }
  },

  render: function() {
    return (
      <ViroARScene postProcessEffects={["pincushiondistortion"]}>
      <ViroAmbientLight color="#ffffff" intensity={200}/>

      <ViroNode position={[0, -1, -2]} dragType="FixedToWorld" onDrag={()=>{}}>
      <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0,-1,0]}
          position={[0, 5, 0]}
          color="#ffffff"
          castsShadow={true}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={7}
          shadowOpacity={.7}
      />

      <Viro3DObject
        source={require('./icecreamman_anim/icecreamman_anim_a.vrx')}
        resources={[require('./icecreamman_anim/icecreamman_diffuse.png'),
                    require('./icecreamman_anim/icecreamman_normal.png'),
                    require('./icecreamman_anim/icecreamman_specular.png')]}
        position={[0, 0, 0]}
        scale={[.5, .5, .5]}
        type="VRX"
        onClick={this._onTappedIcecream}
        animation={{name:"02", run:this.state.runAnimation, loop:true,}}
      />

      <ViroSurface
        rotation={[-90, 0, 0]}
        position={[0, -.001, 0]}
        width={2.5} height={2.5}
        arShadowReceiver={true}
      />
      </ViroNode>

      <ViroParticleEmitter
        position={[0, 4.5, 0]}
        duration={2000}
        visible={true}
        run={true}
        loop={true}
        fixedToEmitter={true}

        image={{
          source:require("../res/particle_snow.png"),
          height:0.01,
          width:0.01,
          bloomThreshold:1.0
        }}

        spawnBehavior={{
          particleLifetime:[5000,5000],
          emissionRatePerSecond:[200,200],
          spawnVolume:{
            shape:"box",
            params:[20, 1, 20],
            spawnOnSurface:false
          },
          maxParticles:2000
        }}

        particleAppearance={{
          opacity:{
            initialRange:[0,0],
            interpolation:[
              {endValue:1.0, interval:[0,500]},
              {endValue:0.0, interval:[4000,5000]}
            ]
          },
          scale:{
            initialRange:[[5,5,5], [10,10,10]],
            interpolation:[
              {endValue:[6,6,6], interval:[0,1000]},
              {endValue:[10,10,10], interval:[3000,5000]},
              {endValue:[5,5,5], interval:[4000,5000]}
            ]
          }
        }}

        particlePhysics={{
          velocity:{
            initialRange:[
              [-2,-.5,0],
              [2,-3.0,0]
            ]
          }
        }}
     />

      </ViroARScene>
    );
  },

  _onTappedIcecream() {
    this.setState({
      runAnimation : !this.state.runAnimation,
    })
  },
});

module.exports = MainScene;