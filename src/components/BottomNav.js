import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { Icon } from 'react-native-elements'

export const BottomNav = ({onTaskTypeChanged, tabIndex, styles}) => {
    return (
            <BottomNavigation labelColor="white" rippleColor="white" style={styles.bottomNavigation}
                              onTabChange={onTaskTypeChanged} activeTab={tabIndex}
            >
                <Tab
                    barBackgroundColor='#68c2ee'
                    label="All"
                    icon={<Icon size={24} color="white" name="list" />}
                />
                <Tab
                    barBackgroundColor='green'
                    label="Done"
                    icon={<Icon size={24} color="white" name="done" />}
                />
                <Tab
                    barBackgroundColor='orange'
                    label="In progress"
                    icon={<Icon size={24} color="white" name="build" />}
                />
            </BottomNavigation>
    )
}