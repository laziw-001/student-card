import './App.css'
import './components/FirstName.jsx'
import FirstName from './components/FirstName.jsx'

function App() {
	return (
		<div className='container'>
			<div className='card-parent'>
				<div className='card'>
					<img style={{ width: '150px' }} src='/react/mars.png' alt='' />
					<img
						style={{
							width: '120px',
							borderRadius: '50%',
						}}
						src='/react/ava.webp'
						alt=''
					/>
					<FirstName firstName={'Laziza'} lastName={'Abduqodirova'} />
          <p className='student'>Student</p>
				</div>
				<div className='card'>
					<img style={{ width: '150px' }} src='/react/mars.png' alt='' />
					<img
						style={{
							width: '120px',
							borderRadius: '50%',
						}}
						src='/react/ava.webp'
						alt=''
					/>
					<FirstName firstName={'Madina'} lastName={"G'afurjonova"} />
          <p className='student'>Student</p>
				</div>
				<div className='card'>
					<img style={{ width: '150px' }} src='/react/mars.png' alt='' />
					<img
						style={{
							width: '120px',
							borderRadius: '50%',
						}}
						src='/react/ava.webp'
						alt=''
					/>
					<FirstName firstName={'Umar'} lastName={'Shodibekov'} />
          <p className='student'>Student</p>
				</div>
				<div className='card'>
					<img style={{ width: '150px' }} src='/react/mars.png' alt='' />
					<img
						style={{
							width: '120px',
							borderRadius: '50%',
						}}
						src='/react/ava.webp'
						alt=''
					/>
					<FirstName firstName={'Zohirshoh'} lastName={'Bahtiyorov'} />
          <p className='student'>Student</p>
				</div>
				<div className='card'>
					<img style={{ width: '150px' }} src='/react/mars.png' alt='' />
					<img
						style={{
							width: '120px',
							borderRadius: '50%',
						}}
						src='/react/ava.webp'
						alt=''
					/>
					<FirstName firstName={'Abdulmajid'} lastName={'Xabibullayev'} />
          <p className='student'>Student</p>
				</div>
				<div className='card'>
					<img style={{ width: '150px' }} src='/react/mars.png' alt='' />
					<img
						style={{
							width: '120px',
							borderRadius: '50%',
						}}
						src='/react/ava.webp'
						alt=''
					/>
					<FirstName firstName={'Saidazam'} lastName={'Hadjayev'} />
          <p className='student'>Student</p>
				</div>
			</div>
		</div>
	)
}

export default App
