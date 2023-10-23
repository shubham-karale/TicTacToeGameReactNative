import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Declaring the type of props that the component will receive

import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name:string
}>


function Icons({name}:IconProps) {
    
    switch(name){

        case 'circle':
            return <Icon name="circle-o" size={40} color="#F7CD2E" />
            break;

            case 'cross':
                return <Icon name="times" size={40} color="#38CC77" />
                break;


             default:
                return <Icon name="pencil" size={40} color="#0D0D0D" />
                break;


    }


}

const styles = StyleSheet.create({})


export default Icons