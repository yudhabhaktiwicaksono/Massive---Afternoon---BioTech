/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import DocKlink from '../../assets/img/loginImg/doc.png'
import LogoDokter from '../../assets/img/icon/dokter.svg'
import LogoPasien from '../../assets/img/icon/pasien.svg'
import LogoKlinik from '../../assets/img/icon/klink.svg'

const Register = () => {
  const [contentRegister, setContentRegister] = useState('selected')
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordKonfrim, setShowPasswordKonfrim] = useState(false)

  const SelectedContent = () => {
    return (
      <div>
        <div className='title-selected'>Daftar Sekarang :</div>
        <div className='item-register-selected'>
          <div className='my-3 item-selected' onClick={() => setContentRegister('dokter')}>
            <object data={LogoDokter}></object>
            Dokter
          </div>
          <div className='my-3 item-selected' onClick={() => setContentRegister('klink')}>
            <object data={LogoKlinik}> </object>
            Rumah Sakit/Klinik
          </div>
          <div className='my-3 item-selected' onClick={() => setContentRegister('pasien')}>
            <object data={LogoPasien}> </object>
            Pasien
          </div>
        </div>
      </div>
    )
  }

  const DokterContent = () => {
    return (
      <div className='w-100 p-5'>
        <div>
          <div className='title-selected'>Daftar MediCare Sekarang! <span onClick={() => setContentRegister('selected')}>Back</span></div>
          <div className='pt-4'>
            <div className='title-from'>Nama Dokter<span>*</span></div>
            <input type='text' className='form-control mt-3' placeholder='Masukan Nama Dokter' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>No. Handphone<span>*</span></div>
            <input type='number' className='form-control mt-3' placeholder='Masukan No. Handphone Anda' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Email<span>*</span></div>
            <input type='email' className='form-control mt-3' placeholder='Masukan Email Anda' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Password<span>*</span></div>
            <div className='form-control mt-3 d-flex align-items-center'>
              <input type={showPassword ? 'text' : 'password'} className='w-100 input-password' placeholder='Masukan Password Anda' />
              <i class={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} onClick={() => setShowPassword(!showPassword)} />
            </div>
          </div>
          <div className='pt-4'>
            <div className='title-from'>Konfirmasi Password<span>*</span></div>
            <div className='form-control mt-3 d-flex align-items-center'>
              <input type={showPasswordKonfrim ? 'text' : 'password'} className='w-100 input-password' placeholder='Masukan Konfirmasi Password Anda' />
              <i class={showPasswordKonfrim ? 'ri-eye-line' : 'ri-eye-off-line'} onClick={() => setShowPasswordKonfrim(!showPasswordKonfrim)} />
            </div>
          </div>

        </div>

        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
          <div className='text-desc-content-dokter '>
            Dengan menekan tombol <span>Daftar</span> , Anda setuju dengan semua
            <a>Syarat & Ketentuan</a> serta <a>Kebijakan Privasi</a> yang berlaku
          </div>
          <button>Sign Up</button>
          <div className='text-bot'>Anda sudah memilik akun?<a>Masuk disini</a></div>
        </div>
      </div>
    )
  }

  const KlinkContent = () => {
    return (
      <div className='w-100 p-5'>
        <div className='title-selected'>Daftarkan Rumah Sakit Anda Sekarang! <span onClick={() => setContentRegister('selected')}>Back</span></div>
        <div style={{ height: window.innerHeight - 385, overflowY: 'auto' }}>
          <div className='pt-4'>
            <div className='title-from'>Nama Rumah Sakit<span>*</span></div>
            <input type='text' className='form-control mt-3' placeholder='Masukan Nama Rumah Sakit' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Jenis Rumah Sakit</div>
            <input type='text' className='form-control mt-3' placeholder='Pilih Jenis Rumah Sakit' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Kab/Kota Rumah Sakit</div>
            <input type='text' className='form-control mt-3' placeholder='Masukan Kota Rumah Sakit' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Alamat Rumah Sakit</div>
            <input type='text' className='form-control mt-3' placeholder='Alamat' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Alamat Email<span>*</span></div>
            <input type='email' className='form-control mt-3' placeholder='Masukan Email Anda' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>No. Handphone<span>*</span></div>
            <input type='number' className='form-control mt-3' placeholder='Masukan No. Handphone Anda' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Password<span>*</span></div>
            <div className='form-control mt-3 d-flex align-items-center'>
              <input type={showPassword ? 'text' : 'password'} className='w-100 input-password' placeholder='Masukan Password Anda' />
              <i class={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} onClick={() => setShowPassword(!showPassword)} />
            </div>
          </div>
          <div className='pt-4'>
            <div className='title-from'>Konfirmasi Password<span>*</span></div>
            <div className='form-control mt-3 d-flex align-items-center'>
              <input type={showPasswordKonfrim ? 'text' : 'password'} className='w-100 input-password' placeholder='Masukan Konfirmasi Password Anda' />
              <i class={showPasswordKonfrim ? 'ri-eye-line' : 'ri-eye-off-line'} onClick={() => setShowPasswordKonfrim(!showPasswordKonfrim)} />
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
          <div className='docs-selected'>
            <img src={DocKlink} alt="Dock" />
            <span>
              Akun ini akan menjadi akun utama yang diakses oleh penanggung jawab
              Rumah Sakit/manajemen Rumah Sakit.
            </span>
          </div>
          <div className='text-desc-content-dokter '>
            Dengan menekan tombol <span>Daftar</span> , Anda setuju dengan semua
            <a>Syarat & Ketentuan</a> serta <a>Kebijakan Privasi</a> yang berlaku
          </div>
          <button>Sign Up</button>
          <div className='text-bot'>Anda sudah memilik akun?<a>Masuk disini</a></div>
        </div>
      </div>
    )
  }

  const PasienContent = () => {
    return (
      <div className='w-100 p-5'>
        <div>
          <div className='title-selected'>Daftar MediCare Sekarang! <span onClick={() => setContentRegister('selected')}>Back</span></div>
          <div className='pt-4'>
            <div className='title-from'>Nama Dokter<span>*</span></div>
            <input type='text' className='form-control mt-3' placeholder='Masukan Nama Dokter' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>No. Handphone<span>*</span></div>
            <input type='number' className='form-control mt-3' placeholder='Masukan No. Handphone Anda' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Email<span>*</span></div>
            <input type='email' className='form-control mt-3' placeholder='Masukan Email Anda' />
          </div>
          <div className='pt-4'>
            <div className='title-from'>Password<span>*</span></div>
            <div className='form-control mt-3 d-flex align-items-center'>
              <input type={showPassword ? 'text' : 'password'} className='w-100 input-password' placeholder='Masukan Password Anda' />
              <i class={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} onClick={() => setShowPassword(!showPassword)} />
            </div>
          </div>
          <div className='pt-4'>
            <div className='title-from'>Konfirmasi Password<span>*</span></div>
            <div className='form-control mt-3 d-flex align-items-center'>
              <input type={showPasswordKonfrim ? 'text' : 'password'} className='w-100 input-password' placeholder='Masukan Konfirmasi Password Anda' />
              <i class={showPasswordKonfrim ? 'ri-eye-line' : 'ri-eye-off-line'} onClick={() => setShowPasswordKonfrim(!showPasswordKonfrim)} />
            </div>
          </div>

        </div>

        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
          <div className='text-desc-content-dokter '>
            Dengan menekan tombol <span>Daftar</span> , Anda setuju dengan semua
            <a>Syarat & Ketentuan</a> serta <a>Kebijakan Privasi</a> yang berlaku
          </div>
          <button>Sign Up</button>
          <div className='text-bot'>Anda sudah memilik akun?<a>Masuk disini</a></div>
        </div>
      </div>
    )
  }


  return (
    <div>
      <div className='overflow-hidden'>
        <div className='row px-0 ' style={{ height: window.innerHeight }}>
          <div className={`col-4 px-0 img-register-${contentRegister}`}></div>
          <div className={`col-8 content-register-${contentRegister}`}>
            {
              contentRegister === 'selected' ? SelectedContent() :
                contentRegister === 'dokter' ? DokterContent() :
                  contentRegister === 'klink' ? KlinkContent() :
                    contentRegister === 'pasien' ? PasienContent() : ''
            }
          </div>
        </div>
      </div >
    </div>
  )
}

export default Register;