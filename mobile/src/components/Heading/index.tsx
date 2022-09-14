import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps{
    title: string;
    subttitle: string;
}

export function Heading({ title,subttitle, ...rest }: Props) {
  return (
    <View style={styles.container}{...rest}>
        <Text style ={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subttitle}
        </Text>
    </View>
  );
}