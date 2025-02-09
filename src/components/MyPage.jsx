import { Page, Text,Image, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function MyPage() {
    const styleObj = StyleSheet.create({
        content:{
            backgroundColor : 'red',
            fontSize : '40px',
            color : '#ffffff',
        },
        viewContent:{
            display :'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
          },
    })
  return (
    <Document>
        <Page size={'A4'}>
            <View style={styleObj.viewContent}>
            <Text fixed>Name : Yash Maske</Text>
            <Image src='logo.png' style={{width:'20%'}}></Image>
            </View>
            <Text style={styleObj.content}>Hello World1</Text>
            <Text break style={styleObj.content}>Hello World2</Text>
            <Text break style={styleObj.content}>Hello World3</Text>
            <Text break style={styleObj.content}>Hello World4</Text>
            <Text break style={styleObj.content}>Hello World5</Text>
            <Text style={styleObj.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
        </Page>
    </Document>
  )
}
