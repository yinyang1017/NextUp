import React from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native';
import { customTheme } from '../../constants';

const data = [
    { id: '1', name: 'Row 1', columns: ['Data A', 'Data B', 'Data C', 'Data D', 'Data E'] },
    { id: '2', name: 'Row 2', columns: ['Data F', 'Data G', 'Data H', 'Data I', 'Data J'] },
    { id: '3', name: 'Row 3', columns: ['Data K', 'Data L', 'Data M', 'Data N', 'Data O'] },
    // Add more data rows as needed
];

export const CustomTable = ({ title = '' }) => {
    const renderHeader = () => {
        return (
            <ScrollView horizontal>
                <View style={[styles.row, styles.header]}>
                    <Text style={[styles.cellHeader, { color: customTheme.colors.blue20, width: 100, textAlign: 'left' }]}>Row Name</Text>
                    {data[0].columns.map((column, index) => (
                        <Text key={index} style={[styles.cellHeader, { color: customTheme.colors.light, width: 80 }]}>
                            Column {index + 1}
                        </Text>
                    ))}
                </View>
            </ScrollView>
        );
    };

    const renderRowItem = ({ item, index }) => {
        const backgroundColor = index % 2 === 0 ? customTheme.colors.primary : customTheme.colors.tertiary;
        return (
            <ScrollView horizontal>
                <View style={[styles.row, { backgroundColor: backgroundColor }]}>
                    <Text style={[styles.cell, { width: 100, textAlign: 'left', color: customTheme.colors.light }]}>{item.name}</Text>
                    {item.columns.map((column, index) => (
                        <Text key={index} style={[styles.cell, { width: 80 }]}>
                            {column}
                        </Text>
                    ))}
                </View>
            </ScrollView>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                color: customTheme.colors.light,
                fontSize: customTheme.fontSizes.size_20,
                fontWeight: '700',
                marginVertical: customTheme.spacings.spacing_12
            }}>{title ?? ''}</Text>
            <ScrollView horizontal>
                <FlatList
                    data={data}
                    ListHeaderComponent={renderHeader}
                    renderItem={renderRowItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    header: {
        backgroundColor: customTheme.colors.tertiary,
        borderBottomWidth: 2,
        borderColor: '#000',
    },
    cellHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: customTheme.spacings.spacing_4
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: customTheme.colors.light

    },
});


