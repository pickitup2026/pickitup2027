import { useState } from 'react'
import { Trash2, Calendar, MapPin, Clock, Check, Recycle, Phone, User } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('schedule')
  const [pickupScheduled, setPickupScheduled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    wasteType: 'general'
  })

  const scheduledPickups = [
    { id: 1, date: '2025-12-05', time: '09:00 AM', type: 'Basura General', status: 'confirmado' },
    { id: 2, date: '2025-12-08', time: '02:00 PM', type: 'Reciclables', status: 'pendiente' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setPickupScheduled(true)
    setTimeout(() => setPickupScheduled(false), 3000)
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <header className="bg-emerald-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Recycle className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">Pick It Up</h1>
              <p className="text-emerald-100 text-sm">Servicio de Recoleccion de Basura</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`py-4 px-6 font-medium transition-colors border-b-2 ${
                activeTab === 'schedule'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Agendar Recoleccion
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-6 font-medium transition-colors border-b-2 ${
                activeTab === 'history'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Mis Recolecciones
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              Agendar una Recoleccion
            </h2>

            {pickupScheduled && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700">Recoleccion agendada exitosamente!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Juan Perez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Numero de Telefono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="0412-123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Direccion de Recoleccion
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Av. Bolivar, Edificio Centro, Piso 3, Caracas"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Fecha de Recoleccion
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Hora Preferida
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Seleccionar hora</option>
                    <option value="08:00">8:00 AM - 10:00 AM</option>
                    <option value="10:00">10:00 AM - 12:00 PM</option>
                    <option value="12:00">12:00 PM - 2:00 PM</option>
                    <option value="14:00">2:00 PM - 4:00 PM</option>
                    <option value="16:00">4:00 PM - 6:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Trash2 className="w-4 h-4 inline mr-1" />
                    Tipo de Basura
                  </label>
                  <select
                    name="wasteType"
                    value={formData.wasteType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="general">Basura General</option>
                    <option value="recyclables">Reciclables</option>
                    <option value="organic">Organicos/Composta</option>
                    <option value="hazardous">Materiales Peligrosos</option>
                    <option value="bulk">Articulos Grandes</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <Recycle className="w-5 h-5" />
                Agendar Recoleccion
              </button>
            </form>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              Recolecciones Agendadas
            </h2>

            <div className="space-y-4">
              {scheduledPickups.map((pickup) => (
                <div
                  key={pickup.id}
                  className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Trash2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{pickup.type}</p>
                      <p className="text-sm text-gray-500">
                        {pickup.date} a las {pickup.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pickup.status === 'confirmado'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {pickup.status.charAt(0).toUpperCase() + pickup.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-gray-400 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Pick It Up Servicios de Recoleccion. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
