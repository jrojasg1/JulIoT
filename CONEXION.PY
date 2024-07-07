
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
cred = credentials.Certificate("julitoiot-firebase-adminsdk-suv2i-8ee543f23d.json")

firebase_admin.initialize_app(cred,{'databaseURL':'https://julitoiot-default-rtdb.firebaseio.com/'})

ref = db.reference('humedad')
sensor_ref = ref
datos = sensor_ref
dictionari_items=datos.get()
for key,value in dictionari_items.items():
	print(value)

#sensor_ref.update({'-N1veAIDGHL53JCAT6kQ':'julito5'})